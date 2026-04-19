import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { prisma } from "@growmodo/db"

type ContactPayload = {
  type?: "lead" | "job_application"
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  phone?: string
  website?: string
  role?: string
  portfolio?: string
  linkedin?: string
  experience?: string
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error"
}

function formatName(data: ContactPayload) {
  return [data.firstName, data.lastName].filter(Boolean).join(" ").trim()
}

function formatMessage(data: ContactPayload) {
  if (data.type === "job_application") {
    return JSON.stringify(
      {
        type: "job_application",
        role: data.role,
        portfolio: data.portfolio,
        linkedin: data.linkedin,
        experience: data.experience,
      },
      null,
      2
    )
  }

  return JSON.stringify(
    {
      type: "lead",
      company: data.company,
      phone: data.phone,
      website: data.website,
    },
    null,
    2
  )
}

function buildEmailHtml(data: ContactPayload) {
  const name = formatName(data)
  let htmlContent = `<h2>New ElvateAI Submission</h2>`

  if (data.type === "job_application") {
    htmlContent += `
      <p><strong>Type:</strong> Job application</p>
      <p><strong>Applying for:</strong> ${data.role ?? ""}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${data.email ?? ""}</p>
      <p><strong>Portfolio:</strong> ${data.portfolio ?? ""}</p>
      <p><strong>LinkedIn:</strong> ${data.linkedin ?? ""}</p>
      <p><strong>Experience:</strong> ${data.experience ?? ""}</p>
    `
  } else {
    htmlContent += `
      <p><strong>Type:</strong> Lead</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${data.email ?? ""}</p>
      <p><strong>Company:</strong> ${data.company ?? ""}</p>
      <p><strong>Phone:</strong> ${data.phone ?? ""}</p>
      <p><strong>Website:</strong> ${data.website ?? ""}</p>
    `
  }

  return htmlContent
}

async function saveLead(data: ContactPayload) {
  if (!process.env.DATABASE_URL) {
    return { saved: false, reason: "DATABASE_URL is not configured" }
  }

  const name = formatName(data)
  const lead = await prisma.lead.create({
    data: {
      email: data.email ?? "",
      name: name || null,
      message: formatMessage(data),
    },
  })

  return { saved: true, id: lead.id }
}

async function sendEmail(data: ContactPayload) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_PASS === "your-16-digit-app-password-here") {
    return { sent: false, reason: "Email credentials are not configured" }
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const name = formatName(data)
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.LEAD_TO_EMAIL ?? "ahmed888hadi@gmail.com",
    subject: data.type === "job_application" ? `New Talent Application: ${name}` : `New ElvateAI Lead: ${name}`,
    html: buildEmailHtml(data),
  })

  return { sent: true }
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactPayload

    if (!data.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const [leadResult, emailResult] = await Promise.allSettled([
      saveLead(data),
      sendEmail(data),
    ])

    const lead = leadResult.status === "fulfilled" ? leadResult.value : { saved: false, reason: getErrorMessage(leadResult.reason) }
    const email = emailResult.status === "fulfilled" ? emailResult.value : { sent: false, reason: getErrorMessage(emailResult.reason) }

    return NextResponse.json({
      success: true,
      lead,
      email,
    })
  } catch (error) {
    console.error("Contact route error:", error)
    return NextResponse.json({ error: getErrorMessage(error) || "Failed to process submission" }, { status: 500 })
  }
}
