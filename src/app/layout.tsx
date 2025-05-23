import type React from "react"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Mahadi Hasan Sourav - Portfolio",
  description: "Full-stack web developer with expertise in frontend architecture and performance optimization",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
