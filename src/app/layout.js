import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import './globals.css'

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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A0A0A',
}

export const metadata = {
  title: 'Aurexon — Next-Gen Software & AI Systems',
  description: 'Aurexon is a hybrid technology company engineering enterprise cloud backends, intelligent AI systems, and scalable full-stack web platforms.',
  keywords: ['Aurexon', 'Aurexon Technologies', 'Software Development Company', 'AI Systems', 'Next.js', 'Enterprise Backend', 'SaaS Products'],
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
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
