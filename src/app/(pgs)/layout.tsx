'use client'
import Header from '@/components/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="bg-lgray p-2 xs:p-6">
      <Header />
      {children}
    </main>
  )
}
