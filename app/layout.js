import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/Navbar"

const fontConfig = {
  sans: {
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  },
  mono: {
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  },
}

const sansFont = localFont(fontConfig.sans)
const monoFont = localFont(fontConfig.mono)

export const metadata = {
  title: "Bitlinks - Your trusted URL shortener",
  description: "Bitlinks helps you shorten your Urls easily",
}

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} ${monoFont.variable} antialiased bg-purple-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
