'use client'
import Header from '@/components/Header'
import SideLink from '@/components/SideLink'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from '@/types/Types'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { userDetails, error } = useAuth()
  const [links, setLinks] = useState<Link[]>(userDetails.links)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(userDetails.links?.length)
    if (userDetails.links) {
      setLinks(userDetails.links)
    }
    if (links.length < 1 && !error) {
      setLoading(true)
    }
    if (error) {
      setLoading(false)
    }
    console.log(links.length)
  }, [userDetails])
  return (
    <main className="bg-lgray p-2 xs:p-6">
      <Header />
      <section className="flex gap-6 mt-6 relative justify-between">
        <div className="hidden md:flex w-full xs:p-[40px] h-[75vh] max-h-[834px] rounded-lg max-w-[560px] bg-white justify-center items-center basis-[40%]">
          <div className="h-full relative">
            <Image
              src="/images/phone.svg"
              alt="phone"
              width={300}
              height={400}
            />
            <SideLink links={links} height="360px" />
          </div>
        </div>
        {children}
      </section>
    </main>
  )
}
