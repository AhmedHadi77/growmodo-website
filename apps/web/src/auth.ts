import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Nodemailer from "next-auth/providers/nodemailer"
import type { Provider } from "next-auth/providers"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@growmodo/db"

const emailUser =
  process.env.EMAIL_USER ??
  process.env.EMAIL_FROM ??
  process.env.GMAIL_USER ??
  process.env.SMTP_USER ??
  "ahmed888hadi@gmail.com"

const emailPass =
  process.env.EMAIL_PASS ??
  process.env.GMAIL_APP_PASSWORD ??
  process.env.SMTP_PASS

const providers: Provider[] = [
  Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
  }),
]

if (emailPass) {
  providers.push(
    Nodemailer({
      server: {
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      },
      from: process.env.EMAIL_FROM ?? emailUser,
    })
  )
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
})
