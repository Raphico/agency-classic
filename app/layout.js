import './globals.css'
import { Lato } from "next/font/google"

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Startup Landing | Agency Classic',
  description: "Agency Classic a range of digital services, including 3D modeling, digital promotion, business enterprise, marketing and advertising, ultimate development, and online support. The page features smart jackpots, secure content, and behind-the-design information. There are also pricing plans available for both individuals and organizations. The page includes customer testimonials that highlight the excellent and fast service provided by the company.",
  keyword: ["digital services", "3D modeling", "digital promotion", "business enterprise", "marketing", "advertising", "ultimate development", "online support", "smart jackpots", "secure content", "pricing plans", "customer testimonials"],
  icons: {
    icon: "/logo.svg"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  )
}
