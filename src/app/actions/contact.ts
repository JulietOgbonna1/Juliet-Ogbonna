"use server";

import nodemailer from "nodemailer";
import { site } from "@/lib/data";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; phone: string; subject: string; message: string };
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim().slice(0, 120),
    email: String(formData.get("email") ?? "").trim().slice(0, 200),
    phone: String(formData.get("phone") ?? "").trim().slice(0, 40),
    subject: String(formData.get("subject") ?? "").trim().slice(0, 160),
    message: String(formData.get("message") ?? "").trim().slice(0, 5000),
  };

  // Honeypot: real visitors never fill this hidden field.
  if (String(formData.get("company") ?? "")) {
    return { status: "success", message: "Thanks! Your message is on its way." };
  }

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please tell Juliet your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.length < 10) errors.message = "Your message should be at least 10 characters.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const { SMTP_HOST = "smtp.gmail.com", SMTP_PORT = "465", SMTP_USER, SMTP_PASS } = process.env;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS are not configured.");
    return {
      status: "error",
      message: `Messaging isn't configured yet — please email ${site.email} directly.`,
      values,
    };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 0;color:#8a7065;font-size:12px;text-transform:uppercase;letter-spacing:.12em;width:110px;vertical-align:top">${label}</td><td style="padding:8px 0;color:#23100b;font-size:15px">${esc(value)}</td></tr>`
      : "";

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to,
      replyTo: `"${values.name.replace(/"/g, "")}" <${values.email}>`,
      subject: `New enquiry from ${values.name}${values.subject ? ` — ${values.subject}` : ""}`,
      text: `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || "-"}\nSubject: ${values.subject || "-"}\n\n${values.message}`,
      html: `<div style="background:#f2e6ce;padding:32px;font-family:Arial,sans-serif">
        <div style="max-width:560px;margin:auto;background:#fbf6ea;border-radius:20px;overflow:hidden;border:1px solid #e3cfa9">
          <div style="background:#6e0d01;color:#f2e6ce;padding:24px 28px">
            <p style="margin:0;font-size:12px;letter-spacing:.2em;text-transform:uppercase;opacity:.8">Portfolio enquiry</p>
            <h1 style="margin:8px 0 0;font-size:22px">${esc(values.name)} wants to connect</h1>
          </div>
          <div style="padding:24px 28px">
            <table style="width:100%;border-collapse:collapse">
              ${row("Name", values.name)}${row("Email", values.email)}${row("Phone", values.phone)}${row("Subject", values.subject)}
            </table>
            <div style="margin-top:16px;padding:18px;border-radius:14px;background:#f2e6ce;color:#23100b;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(values.message)}</div>
            <p style="margin-top:20px;font-size:13px;color:#8a7065">Hit reply to answer ${esc(values.name)} directly.</p>
          </div>
        </div></div>`,
    });

    // Friendly confirmation to the sender (best-effort).
    await transporter
      .sendMail({
        from: `"Juliet Ogbonna" <${SMTP_USER}>`,
        to: values.email,
        replyTo: to,
        subject: "Thanks for reaching out — Juliet Ogbonna",
        text: `Hi ${values.name},\n\nThanks for your message! I've received it and will get back to you shortly.\n\n— Juliet Ogbonna\n${site.role}`,
      })
      .catch(() => {});

    return { status: "success", message: "Message sent! Juliet will get back to you shortly." };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email ${site.email} directly.`,
      values,
    };
  }
}
