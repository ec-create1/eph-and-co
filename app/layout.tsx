import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'EPH & CO',
  description:
    'Luxury custom crystal accessories and handbag charms based in Manchester, United Kingdom.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}