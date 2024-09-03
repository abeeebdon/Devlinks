import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './context/AuthContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyLinks',
  description: 'MyLinks allow you to share important information such as email, accout  Task',
  icons: '/images/logo.svg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  )
}
