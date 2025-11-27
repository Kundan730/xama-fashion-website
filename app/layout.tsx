import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "XAMA – Premium Men's Fashion Coming Soon",
  description:
    "Affordable premium men's clothing, launching soon on xama.in. Get exclusive early access to stylish and trendy men's fashion.",
  keywords: ["men's fashion", "affordable clothing", "premium fashion", "XAMA", "men's wear"],
  icons: {
    icon: [
      {
        url: "/Gemini_Generated_Image_lzqed8lzqed8lzqe.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Gemini_Generated_Image_lzqed8lzqed8lzqe.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Gemini_Generated_Image_lzqed8lzqed8lzqe.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/Gemini_Generated_Image_lzqed8lzqed8lzqe.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
