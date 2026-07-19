import './globals.css'

export const metadata = {
  title: 'Manish Kumar | Java Backend & AI Developer',
  description: 'Portfolio of Manish Kumar, Java Backend Developer and AI Enthusiast.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
