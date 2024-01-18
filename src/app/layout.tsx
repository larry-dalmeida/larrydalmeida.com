import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import './globals.css'
import { LOGO_TEXT, META_DESCRIPTION } from './constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Notes, Snippets & Prose | ${LOGO_TEXT}`,
  description: META_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-slate-950 text-slate-50 ${inter.className}`}>
        <div className="max-w-2xl mx-auto py-10 px-4">
            <header className='text-sm font-medium'>
              {LOGO_TEXT}
            </header>
            <main>
              {children}
            </main>
          </div>
          <GoogleAnalytics gaId="G-1HRRMXSBWQ" />
      </body>
    </html>
  )
}
