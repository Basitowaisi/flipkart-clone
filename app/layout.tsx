import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { clsx } from "clsx"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flipkart Clone",
  description: "Flipkart Clone made with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const classes = clsx(inter.className)

  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  )
}
