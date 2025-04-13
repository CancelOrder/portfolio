import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "NVCN",
  description: "NVCN",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}
        <Analytics />

      </body>
    </html>
  )
}


import './globals.css'