import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const NOTIFICATION_EMAIL = "hello@devhatchlabs.com";
const MAX_REQUEST_BYTES = 32_000;

type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return (
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) &&
    !/[\r\n]/.test(value)
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { error: "Request is too large." },
      { status: 413 },
    );
  }

  let body: ContactSubmission;

  try {
    const parsedBody: unknown = await request.json();

    if (
      !parsedBody ||
      typeof parsedBody !== "object" ||
      Array.isArray(parsedBody)
    ) {
      throw new Error("Invalid request body");
    }

    body = parsedBody as ContactSubmission;
  } catch {
    return NextResponse.json(
      { error: "A valid JSON request body is required." },
      { status: 400 },
    );
  }

  const name = cleanText(body.name, 120);
  const email = cleanText(body.email, 254).toLowerCase();
  const company = cleanText(body.company, 160);
  const service = cleanText(body.service, 80);
  const budget = cleanText(body.budget, 80);
  const message = cleanText(body.message, 5_000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and project details are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM_ADDRESS;

  if (!apiKey || !from) {
    console.error("Contact email is not configured.");
    return NextResponse.json(
      { error: "Contact service is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [NOTIFICATION_EMAIL],
        reply_to: email,
        subject: `New Project Inquiry — ${name.replace(/[\r\n]+/g, " ")}`,
        text: [
          "New project inquiry received from the DevHatch Labs website.",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          `Service: ${service || "Not selected"}`,
          `Budget: ${budget || "Not selected"}`,
          "",
          "Project details:",
          message,
        ].join("\n"),
        html: `
          <h1>New Project Inquiry</h1>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
          <p><strong>Service:</strong> ${escapeHtml(service || "Not selected")}</p>
          <p><strong>Budget:</strong> ${escapeHtml(budget || "Not selected")}</p>
          <h2>Project details</h2>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected contact email:", response.status);
      return NextResponse.json(
        { error: "Message delivery failed. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return NextResponse.json(
      { error: "Message delivery failed. Please try again." },
      { status: 502 },
    );
  }
}
