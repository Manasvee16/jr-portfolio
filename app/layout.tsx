import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manasavee Rathie',
  description: 'Portfolio Website',
  generator: 'Manasvee',
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
