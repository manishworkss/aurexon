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
  themeColor: '#3F4F37',
}

export const metadata = {
  title: 'Aurexon — Next-Gen Software & AI Systems',
  description: 'Aurexon is a hybrid technology company engineering enterprise cloud backends, intelligent AI systems, and scalable full-stack web platforms.',
  keywords: ['Aurexon', 'Aurexon Technologies', 'Software Development Company', 'AI Systems', 'Spring Boot', 'Next.js', 'Enterprise Backend', 'SaaS Products'],
  authors: [{ name: 'Aurexon Technologies' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Aurexon — Next-Gen Software & AI Systems',
    description: 'Engineering enterprise cloud backends, intelligent AI systems, and scalable full-stack web platforms.',
    url: 'https://www.aurexon.tech',
    siteName: 'Aurexon Technologies',
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
