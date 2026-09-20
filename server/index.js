import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import { createEmailTemplate } from "./emailTemplate.js";

const app = express();
const port = Number(process.env.PORT || 3001);

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );
}

app.use(express.json({ limit: "20kb" }));

function getTransporter() {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    throw new Error("SMTP configuration is incomplete.");
  }

  const smtpPassword = process.env.SMTP_PASS.trim().replace(/\s/g, "");

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. smtp.gmail.com
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true", // false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: smtpPassword,
    },
  });
}

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.post("/api/contact", async (request, response) => {
  const { name, email, phone = "", message, website = "" } = request.body || {};

  // Honeypot check for bots
  if (website) {
    return response.status(200).json({ message: "Thanks for reaching out." });
  }

  // Validation
  if (
    typeof name !== "string" ||
    name.trim().length < 2 ||
    name.trim().length > 80 ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    typeof message !== "string" ||
    message.trim().length < 10 ||
    message.trim().length > 5000 ||
    typeof phone !== "string" ||
    phone.length > 40
  ) {
    return response
      .status(400)
      .json({ message: "Please check your details and try again." });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();
  const cleanPhone = phone.trim();
  const cleanMessage = message.trim();
  const recipient = process.env.CONTACT_TO || process.env.SMTP_USER;

  if (!recipient) {
    return response
      .status(500)
      .json({ message: "Email delivery is not configured yet." });
  }

  try {
    const transporter = getTransporter();
    
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: cleanEmail,
      subject: `📩 New Portfolio Message — ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone || "Not provided"}\n\nMessage:\n${cleanMessage}`,
      html: createEmailTemplate({
        name: escapeHtml(cleanName),
        email: escapeHtml(cleanEmail),
        phone: escapeHtml(cleanPhone),
        message: escapeHtml(cleanMessage),
      }),
    });

    return response
      .status(200)
      .json({ message: "Message sent. Thanks for reaching out!" });
  } catch (error) {
    console.error("Contact email error:", error);
    return response.status(500).json({
      message: "We could not send your message. Please try again shortly.",
    });
  }
});

export default app;

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Contact API listening on port ${port}`);
  });
}