'use client'
import Header from '@/components/Header'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { userId } = useAuth()
  const router = useRouter()
  if (userId === '') {
    return router.push('/login')
  } else {
    return (
      <main className="bg-lgray p-4 xs:p-6">
        <Header />
        {children}
      </main>
    )
  }
}
