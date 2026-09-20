# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Kartik's Portfolio

## Contact email setup

The contact form sends messages through the Express API in `server/index.js` using SMTP. SMTP credentials stay on the server and are never exposed to the browser.

1. Copy `.env.example` to `.env`.
2. Add SMTP credentials. For Gmail, use an App Password rather than your normal account password.
3. Set `CONTACT_TO` to the inbox that should receive portfolio messages.
4. Run the full local app:

```bash
npm run dev:all
```

The Vite frontend runs on `http://localhost:5173` and proxies `/api` requests to the API on port `3001`. The API health check is available at `http://localhost:3001/api/health`.

## Vercel deployment

The `api/` files expose the Express contact routes as Vercel Functions, so the frontend and email API use the same deployment. Add these variables in Vercel under **Project Settings -> Environment Variables** for the `Production` environment:

```text
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail-address
SMTP_PASS=your-16-character-gmail-app-password
CONTACT_TO=your-inbox-address
MAIL_FROM=your-gmail-address
```

Redeploy after adding or changing environment variables. `VITE_API_URL` should normally be left unset because the form calls the same-origin `/api/contact` function. Never commit `.env` or real SMTP credentials.
