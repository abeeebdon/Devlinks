import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Links = () => {
  return (
    <section className="flex mt-6 p-[40px] bg-white">
      <div className="hidden md:flex w-full max-w-[560px] max-h-[834px] h-full justify-center items-center basis-[35%] ">
        <Image src="/images/phone.svg" alt="phone" width={300} height={630} />
      </div>
      <div className="basis-[60%]">
        <div>
          <h2 className="heading text-dgrap">Customize your links</h2>
          <p className="paragraph">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <Button
            text="+ Add new Link"
            className="mt-[40px] py-[11px] px-[27x] w-full text-center paragraph font-[600] text-purple border border-purple rounded-lg"
          />
        </div>
        <div className="bg-lgray text-center mt-6 p-5 h-[469px]">
          <div className="flex justify-center flex-col mb-6">
            <div className="w-full flex justify-center">
              <Image
                src="/images/AddPhone.svg"
                alt="AddPhone"
                width={249}
                height={160}
              />
            </div>

            <h3 className="heading text-dgrap mt-[40px]">
              Lets get you started
            </h3>
            <p className="mt-6 paragraph">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
        <button>Save</button>
      </div>
    </section>
  )
}

export default Links
