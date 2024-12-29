'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'
import DisplayingLink from '@/features/DisplayingLink'

const Page = () => {
  const { userDetails } = useAuth()
  const router = useRouter()
  const user = '/images/Ben.svg'
  const logOut = () => {
    router.push('/login')
  }
  return (
    <section className=" bg-purple min-h-screen p-4 xs:p-6 ">
      <header className="flex justify-between items-center  p-4 bg-white rounded-lg">
        <div className="flex gap-2">
          <Link
            href="/links"
            className="hover:bg-lpurple px-4 sm:px-[27px] border border-purple text-purple py-[11px] rounded-lg paragraph font-[600]"
          >
            Back to Editor
          </Link>
        </div>
        <div>
          <Button
            text="Log out"
            onClick={logOut}
            className="hover:bg-lpurple hover:text-purple px-4 sm:px-[27px] bg-purple text-white py-[11px] rounded-lg paragraph font-[600]"
          />
        </div>
      </header>
      <section className="bg-white rounded-lg px-4 sm:px-[27px] py-4 pb-4 no-scroll overflow-auto max-h-[80vh] min-h-[70vh] mx-auto max-w-[450px] mt-4">
        <div className="text-center heading flex flex-col items-center">
          <div className="border-[5px] rounded-full size-[108px] border-purple p-1 flex justify-center items-center">
            <Image
              src={userDetails.profileImageUrl || user}
              width={104}
              height={104}
              alt="profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          <h2>{`${userDetails.firstName}  ${userDetails.lastName}`}</h2>
          <p className="paragraph">{userDetails.email}</p>
        </div>
        <div className=" mt-5 w-full max-w-[200px]  flex flex-col gap-4 mx-auto">
          {userDetails.links?.map((data, index) => (
            <div key={index}>
              <DisplayingLink {...data} />
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Page
