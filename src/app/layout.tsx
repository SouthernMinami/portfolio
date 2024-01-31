import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PageTopButton } from './components/elements/PageTopButton'
import { Footer } from './components/layouts/Footer'
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
        <link rel="icon" href="/assets/sq-icon.ico" />
        {/* Devicon */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <Header title="Kano" />
        <main>
          {children}
          <PageTopButton />
        </main>
        <Footer />
      </body>
    </html>
  )
}
