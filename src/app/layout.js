import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Manish Kumar | Java Backend & AI Developer',
  description: 'Portfolio of Manish Kumar, Java Backend Developer and AI Enthusiast.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
