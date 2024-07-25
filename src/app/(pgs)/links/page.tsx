import Button from '@/components/Button'
import CreateLink from '@/features/CreateLink'
import Image from 'next/image'
import React from 'react'

const Links = () => {
  return (
    <section className="flex gap-6 mt-6 relative justify-between ">
      <div className="hidden md:flex w-full p-[40px] h-[834px] rounded-lg max-w-[560px] bg-white  justify-center items-center basis-[40%] ">
        <Image src="/images/phone.svg" alt="phone" width={300} height={630} />
      </div>
      <div className="md:basis-[60%] bg-white  p-[40px] pb-0 rounded-lg">
        <CreateLink />
        <div className=" absolute flex justify-end  p-6 cursor-pointer mt-10">
          <Button
            text="save"
            className="text-white hover:bg-phover rounded-lg bg-[#633CFF] bg-opacity-25 py-[11px] px-[27px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Links
