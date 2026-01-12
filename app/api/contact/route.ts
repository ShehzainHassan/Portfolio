import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["shehzainhassan@gmail.com"],
      replyTo: email,
      subject: subject || "New Contact Form Message",
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
