import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manasvee Rathie - Frontend Developer | Problem Solver',
  description: 'Portfolio of Manasvee Rathie, a Frontend Developer and Computer Science Engineering student at VIT. Specializing in React, Next.js, and modern web development.',
  generator: 'Next.js',
  keywords: ['Frontend Developer', 'Web Development', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'VIT', 'Software Engineer'],
  authors: [{ name: 'Manasvee Rathie' }],
  creator: 'Manasvee Rathie',
  publisher: 'Manasvee Rathie',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manasvee-portfolio.com/',
    siteName: 'Manasvee Rathie Portfolio',
    title: 'Manasvee Rathie - Frontend Developer',
    description: 'Frontend Developer and Computer Science Engineering student at VIT. Explore my projects and skills.',
    images: [
      {
        url: '/public/placeholder-user.jpg',
        width: 1200,
        height: 630,
        alt: 'Manasvee Rathie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manasvee Rathie - Frontend Developer',
    description: 'Frontend Developer and Computer Science Engineering student at VIT. Explore my projects and skills.',
    images: ['/public/placeholder-user.jpg'],
    creator: '@MansveeRathie',
  },
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
