'use client'

import 'tailwindcss/tailwind.css'

import { JetBrains_Mono, PT_Sans, Ubuntu } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

const serif = Ubuntu({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = PT_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})
const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-stone-900 text-black dark:text-stone-100 min-h-[100dvh]">
        <ThemeProvider attribute="class" enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  )
}
