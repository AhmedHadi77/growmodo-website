import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Check if configuration exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === "your-16-digit-app-password-here") {
        console.error("Missing or invalid EMAIL_PASS in .env.local file. Email was not sent.");
        return NextResponse.json({ 
            error: "Server configuration error. Please update .env.local with your real Gmail App Password."
        }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let htmlContent = `<h2>New Submission Received</h2>`;
    
    // Construct the email depending on whether it's the "Book a Call" or "Apply" form
    if (data.type === 'job_application') {
        htmlContent += `
            <p><strong>Applying for:</strong> ${data.role}</p>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Portfolio:</strong> ${data.portfolio}</p>
            <p><strong>LinkedIn:</strong> ${data.linkedin}</p>
            <p><strong>Experience:</strong> ${data.experience}</p>
        `;
    } else {
        // Default lead capture
        htmlContent += `
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Website:</strong> ${data.website}</p>
        `;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ahmed888hadi@gmail.com', // Exactly to the user's requested email
      subject: `New Lead: ${data.firstName} ${data.lastName}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Sent successfully!" });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
  }
}
