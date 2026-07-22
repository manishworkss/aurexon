import { Plus_Jakarta_Sans, Outfit, Shantell_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuroraBackground from '@/components/AuroraBackground'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const shantell = Shantell_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shantell',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#D8B29A',
}

export const metadata = {
  title: 'Manish Kumar | Java Backend & AI Developer',
  description: 'Portfolio of Manish Kumar — Java Backend Developer & AI Enthusiast. Building robust, scalable backend systems and intelligent AI solutions with Spring Boot, Java, and modern web technologies.',
  keywords: ['Java Developer', 'Backend Developer', 'AI Enthusiast', 'Spring Boot', 'Portfolio', 'Manish Kumar'],
  authors: [{ name: 'Manish Kumar' }],
  openGraph: {
    title: 'Manish Kumar | Java Backend & AI Developer',
    description: 'Portfolio of Manish Kumar — Java Backend Developer & AI Enthusiast.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable} ${shantell.variable}`} suppressHydrationWarning>
      <body>
        <AuroraBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
