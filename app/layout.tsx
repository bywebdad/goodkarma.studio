import type React from "react"
import "@/app/globals.css"
import { Mulish } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"

const mulish = Mulish({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mulish",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Good Karma - Студия заботы о теле в центре Москвы",
  description:
    "Good Karma в центре Москвы. Профессиональная забота о теле с приятными ценами. Онлайн-запись за 1 минуту.",
  generator: 'good-karma',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${mulish.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
