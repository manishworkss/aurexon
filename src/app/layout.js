import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

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
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
