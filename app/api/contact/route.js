import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL,
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}
