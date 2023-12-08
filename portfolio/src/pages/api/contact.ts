import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  // Ensure all required fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Change this to your email address
      subject: "New Portfolio Website Email",
      html: `
        <p>From: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
