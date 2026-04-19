import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AIAssistant } from "@/components/chat/ai-assistant";
import { PrivacySettings } from "@/components/layout/privacy-settings";
import { brand } from "@/lib/growmodo-content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brand.name} | ${brand.shortTagline}`,
  description: "Access AI-empowered designers, developers, video editors, and project managers through one managed talent membership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <AIAssistant />
          <PrivacySettings />
        </ThemeProvider>
      </body>
    </html>
  );
}
