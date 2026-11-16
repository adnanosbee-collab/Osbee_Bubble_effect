import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


function clean(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 100);
    const email = clean(body.email, 254);
    const subject = clean(body.subject, 150);
    const message = clean(body.message, 5000);

    if (!name || !subject || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.OUTLOOK_EMAIL;
    const smtpPassword = process.env.OUTLOOK_APP_PASSWORD;
    const recipient = process.env.CONTACT_RECIPIENT;

    if (!smtpUser || !smtpPassword || !recipient) {
      console.error("Contact email configuration is missing.");
      return NextResponse.json(
        { error: "The enquiry service is not configured yet. Please contact us by email or phone." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.OUTLOOK_SMTP_HOST || "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: `"OSBEE Website Enquiry" <${smtpUser}>`,
      to: recipient,
      replyTo: {
        name,
        address: email,
      },
      subject: `Website enquiry: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again or contact us by email." },
      { status: 500 }
    );
  }
}
