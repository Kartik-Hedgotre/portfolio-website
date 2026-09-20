import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import { createEmailTemplate } from "./emailTemplate.js";

const app = express();
const port = Number(process.env.PORT || 3001);
const windowMs = 15 * 60 * 1000;
const maxRequests = 5;
const requestsByIp = new Map();

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

function getClientIp(request) {
  return (
    request.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    request.socket.remoteAddress ||
    "unknown"
  );
}

function isRateLimited(ip) {
  const now = Date.now();
  const recentRequests = (requestsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < windowMs,
  );

  if (recentRequests.length >= maxRequests) {
    requestsByIp.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestsByIp.set(ip, recentRequests);
  return false;
}


function getTransporter() {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    throw new Error("SMTP configuration is incomplete.");
  }

  const smtpPassword = process.env.SMTP_PASS.trim().replace(/\s/g, "");

  if (smtpPassword.length !== 16 || !/^[A-Za-z0-9]+$/.test(smtpPassword)) {
    throw new Error(
      "SMTP_PASS must be the 16-character Gmail App Password without spaces or quotes.",
    );
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
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
  const ip = getClientIp(request);
  const { name, email, phone = "", message, website = "" } = request.body || {};

  if (website) {
    return response.status(200).json({ message: "Thanks for reaching out." });
  }

  if (isRateLimited(ip)) {
    return response.status(429).json({
      message: "Too many requests. Please try again in a few minutes.",
    });
  }

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
    console.error("CONTACT_TO or SMTP_USER must be configured.");
    return response
      .status(500)
      .json({ message: "Email delivery is not configured yet." });
  }

  try {
    await getTransporter().sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: cleanEmail,

      subject: `📩 New Portfolio Message — ${cleanName}`,

      text: `Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone || "Not provided"}

Message:
${cleanMessage}`,

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
    console.error(
      "Contact email failed:",
      error.code || "UNKNOWN",
      error.message,
    );
    return response.status(500).json({
      message: "We could not send your message. Please try again shortly.",
    });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Contact API listening on port ${port}`);
});
