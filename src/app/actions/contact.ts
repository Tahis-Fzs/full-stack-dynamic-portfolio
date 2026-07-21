"use server";

import { site } from "@/content/site";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

const initialState: ContactFormState = { ok: false, message: "" };

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot) {
    return { ok: true, message: "Thank you for your message." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in name, email, and message." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (message.length < 10) {
    return { ok: false, message: "Message is too short — add a bit more detail." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? site.email;
  const from =
    process.env.CONTACT_FROM ?? "Studio Tahsin Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    return {
      ok: true,
      message: `Form received locally. Email delivery is not configured — please write directly to ${site.email} (mailto link below).`,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: subject
          ? `[Portfolio] ${subject} — ${name}`
          : `[Portfolio] Message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", detail);
      throw new Error("Resend request failed");
    }

    return {
      ok: true,
      message: "Message sent successfully. I will reply as soon as I can.",
    };
  } catch {
    return {
      ok: false,
      message: `Could not send email right now. Please contact ${site.email} directly.`,
    };
  }
}

export { initialState as contactInitialState };
