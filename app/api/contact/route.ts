import { NextResponse } from "next/server";
import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ContactFormPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  agents: string;
  message: string;
  agreed: boolean;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

function validatePayload(data: unknown): {
  valid: true;
  payload: ContactFormPayload;
} | {
  valid: false;
  error: string;
} {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Invalid request body." };
  }

  const body = data as Record<string, unknown>;

  const requiredStrings: (keyof ContactFormPayload)[] = [
    "fullName",
    "companyName",
    "email",
    "phone",
    "service",
    "agents",
    "message",
  ];

  for (const field of requiredStrings) {
    const value = body[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      return { valid: false, error: `"${field}" is required.` };
    }
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email as string)) {
    return { valid: false, error: "Please provide a valid email address." };
  }

  if (body.agreed !== true) {
    return { valid: false, error: "You must agree before submitting." };
  }

  return {
    valid: true,
    payload: {
      fullName: (body.fullName as string).trim(),
      companyName: (body.companyName as string).trim(),
      email: (body.email as string).trim(),
      phone: (body.phone as string).trim(),
      service: (body.service as string).trim(),
      agents: (body.agents as string).trim(),
      message: (body.message as string).trim(),
      agreed: true,
    },
  };
}

// ---------------------------------------------------------------------------
// HTML email template
// ---------------------------------------------------------------------------

function buildEmailHtml(payload: ContactFormPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#111113;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#111113;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1a1a1d;border-radius:12px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#c9a54e,#e8c76a);padding:32px 40px;">
              <h1 style="margin:0;font-size:22px;color:#111113;">New Contact Form Submission</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#111113cc;">Call &amp; Close Properties</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #2a2a2d;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;color:#888;letter-spacing:0.5px;">Full Name</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#fff;">${escapeHtml(payload.fullName)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #2a2a2d;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;color:#888;letter-spacing:0.5px;">Company</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#fff;">${escapeHtml(payload.companyName)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #2a2a2d;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;color:#888;letter-spacing:0.5px;">Email</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#fff;">
                      <a href="mailto:${escapeHtml(payload.email)}" style="color:#c9a54e;text-decoration:none;">${escapeHtml(payload.email)}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #2a2a2d;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;color:#888;letter-spacing:0.5px;">Phone</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#fff;">
                      <a href="tel:${escapeHtml(payload.phone)}" style="color:#c9a54e;text-decoration:none;">${escapeHtml(payload.phone)}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #2a2a2d;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;color:#888;letter-spacing:0.5px;">Service Needed</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#fff;">${escapeHtml(payload.service)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #2a2a2d;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;color:#888;letter-spacing:0.5px;">Number of Agents</p>
                    <p style="margin:4px 0 0;font-size:16px;color:#fff;">${escapeHtml(payload.agents)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #2a2a2d;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;color:#888;letter-spacing:0.5px;">
                      Agreement
                    </p>

                    <p style="margin:4px 0 0;font-size:16px;color:#fff;">
                      Accepted
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0 0;">
                    <p style="margin:0;font-size:12px;text-transform:uppercase;color:#888;letter-spacing:0.5px;">Message</p>
                    <p style="margin:8px 0 0;font-size:15px;color:#ddd;line-height:1.6;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #2a2a2d;">
              <p style="margin:0;font-size:12px;color:#666;">
                This email was sent from the contact form on callandcloseproperties.com.
                You can reply directly to this email to reach the customer.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    // 1. Environment check
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.error("Missing environment variables: RESEND_API_KEY or CONTACT_EMAIL");
      return NextResponse.json(
        { error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // 2. Parse body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body." },
        { status: 400 }
      );
    }

    // 3. Validate
    const result = validatePayload(body);
    if (!result.valid) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const { payload } = result;

    // 4. Send email via Resend
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: "Call & Close Properties <contact@callcloseproperties.com>",
      to: [contactEmail],
      replyTo: payload.email,
      subject: `[Website] ${payload.fullName} | ${payload.service}`,
      html: buildEmailHtml(payload),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again later." },
        { status: 500 }
      );
    }

    // 5. Success
    return NextResponse.json(
      { message: "Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected error in /api/contact:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
