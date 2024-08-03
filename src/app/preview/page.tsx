'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { userDetails, userId } = useAuth()
  const router = useRouter()
  const [linked, setLinked] = useState(userDetails.links)

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
          <div className="border-[5px] rounded-full w-[108px] h-[108px] border-purple p-1 flex justify-center items-center">
            <Image
              src={userDetails.profileImageUrl}
              width={104}
              height={104}
              alt="profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          <h2>{`${userDetails.firstName}  ${userDetails.lastName}`}</h2>
          <p className="paragraph">{userDetails.email}</p>
        </div>
        <div>
          {linked.length > 0 ? (
            <>
              {linked.map((link, index) => {
                return <p key={index}>{link.identifier}</p>
              })}
            </>
          ) : (
            <p>You do not have any link</p>
          )}
        </div>
      </section>
    </section>
  )
}

export default Page
