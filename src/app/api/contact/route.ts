import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message, botcheck } = await req.json();

  // Honeypot check
  if (botcheck) {
    return NextResponse.json({ success: true });
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_KEY,
      subject: "New message from thisisloud.tech",
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    }),
  });

  const result = await res.json();

  if (result.success) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 500 });
}
