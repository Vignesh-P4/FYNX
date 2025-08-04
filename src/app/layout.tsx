import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FYNX - Smarter Finance for Everyone',
  description: 'Premium finance management platform inspired by Lamborghini aesthetics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
