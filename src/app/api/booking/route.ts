import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type BookingPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  serviceType?: string;
  preferredDate?: string;
  preferredTime?: string;
  mobileRequested?: string;
  details?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as BookingPayload;

    // Validate required fields
    if (
      !body.name ||
      !body.email ||
      !body.phone ||
      !body.city ||
      !body.serviceType ||
      !body.preferredDate ||
      !body.details
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.BOOKING_TO_EMAIL ?? "tattooandmax@gmail.com";

    if (!smtpUser || !smtpPass || smtpPass.includes("REPLACE_WITH")) {
      console.error("SMTP not configured: set SMTP_USER and SMTP_PASS in .env.local");
      return NextResponse.json(
        { error: "Email service is not configured. Add Gmail App Password to .env.local" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mobileRequested = body.mobileRequested === "yes" ? "Yes" : "No";
    const submittedAt = new Date().toISOString();

    const text = [
      "New booking request",
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone}`,
      `City: ${body.city}`,
      `Service type: ${body.serviceType}`,
      `Preferred date: ${body.preferredDate}`,
      `Preferred time: ${body.preferredTime ?? "Not specified"}`,
      `Mobile requested: ${mobileRequested}`,
      `Details: ${body.details}`,
      `Submitted: ${submittedAt}`,
    ].join("\n");

    const html = `
      <h2>New booking request</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>City:</strong> ${body.city}</p>
      <p><strong>Service type:</strong> ${body.serviceType}</p>
      <p><strong>Preferred date:</strong> ${body.preferredDate}</p>
      <p><strong>Preferred time:</strong> ${body.preferredTime ?? "Not specified"}</p>
      <p><strong>Mobile requested:</strong> ${mobileRequested}</p>
      <p><strong>Details:</strong><br/>${body.details?.replace(/\n/g, "<br/>")}</p>
      <p><strong>Submitted:</strong> ${submittedAt}</p>
    `;

    await transporter.sendMail({
      from: `AMAX Tattoo <${smtpUser}>`,
      to: toEmail,
      replyTo: body.email,
      subject: `New booking request from ${body.name}`,
      text,
      html,
    });

    return NextResponse.json(
      { message: "Booking request received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to process booking request";
    return NextResponse.json(
      { error: `Failed to process booking request: ${message}` },
      { status: 500 }
    );
  }
}
