import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LegalBot Pro — AI-powered legal assistant for modern law firms",
  description: "A comprehensive SaaS platform that combines an intelligent chatbot for client intake and legal research with a powerful analytics dashboard. Designed ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="min-h-screen bg-gray-50 antialiased">{children}</body></html>
}