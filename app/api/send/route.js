import { NextResponse } from "next/server";
import { sendMail } from "../../../lib/email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const website = typeof payload.website === "string" ? payload.website.trim() : "";

  if (website) {
    return NextResponse.json({ success: true });
  }

  if (
    !emailPattern.test(email) ||
    email.length > 254 ||
    !subject || subject.length > 200 ||
    !message || message.length > 10000
  ) {
    return NextResponse.json({ error: "Please provide a valid email, subject, and message." }, { status: 400 });
  }

  try {
    await sendMail({
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `From: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}