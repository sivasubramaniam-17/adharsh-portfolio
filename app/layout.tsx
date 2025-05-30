import type React from "react"
import type { Metadata } from "next"
import { Inter, Cinzel } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })

export const metadata: Metadata = {
  title: "Tamil Cinema Portfolio | Writer • Director • Actor",
  description: "Professional portfolio showcasing creative works in Tamil cinema - Writing, Directing, and Acting",
  keywords: "Tamil cinema, writer, director, actor, portfolio, film, movies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${cinzel.variable} bg-gradient-to-br from-amber-50 via-orange-50 to-red-50`}>
        {children}
      </body>
    </html>
  )
}
