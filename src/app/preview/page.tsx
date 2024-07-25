'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'

const Page = () => {
  const { getData, getAll, setDocs } = useAuth()
  useEffect(() => {
    getData()
    getAll()
  }, [])
  const handleClick = () => {
    const userDetails = {
      name: 'Abeeb',
      password: 'Olumide',
    }
    setDocs(userDetails)
  }
  return (
    <section className="relative bg-white xs:bg-purple h-[357px] p-4 xs:p-6 rounded-b-[32px]">
      <header className="flex justify-between items-center  p-4 bg-white rounded-lg">
        <div className="flex gap-2">
          <Link
            href="/links"
            className="hover:bg-lpurple px-[27px] border border-purple text-purple py-[11px] rounded-lg paragraph font-[600]"
          >
            Back to Editor
          </Link>
        </div>
        <div>
          <Button
            text="Share link"
            className="hover:bg-lpurple hover:text-purple px-[27px] bg-purple text-white py-[11px] rounded-lg paragraph font-[600]"
          />
        </div>
      </header>
      <section className="bg-white top-[60%] px-12 py-14 min-h-[469px] left-0 right-0 mx-auto rounded-lg static xs:absolute max-w-[349px] xs:shadow-lg">
        <div className="text-center heading flex flex-col items-center">
          <div>
            <Image
              src="/images/Ben.svg"
              width={104}
              height={104}
              alt="profile"
            />
          </div>
          <h2>Ben Wright</h2>
          <p className="paragraph">ben@example.com</p>
        </div>
        <div className="mt-14">
          <button onClick={handleClick}>Click</button>
        </div>
      </section>
    </section>
  )
}

export default Page
