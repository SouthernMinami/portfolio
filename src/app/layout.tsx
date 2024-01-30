import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/layouts/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Kano's Portfolio`,
  description: `Kano's Portfolio and Resume Website`
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <Header title="Kano" />
        <main>{children}</main>
      </body>
    </html>
  )
}
