'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const CreateLink = () => {
  const [createLink, setCreateLink] = useState<boolean>(false)
  return (
    <>
      <div>
        <h2 className="heading text-dgrap ">Customize your links</h2>
        <p className="paragraph">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button
          text="+ Add new Link"
          onClick={setCreateLink}
          className="mt-[40px] py-[11px] px-[27x] hover:bg-lpurple w-full text-center paragraph font-[600] text-purple border border-purple rounded-lg"
        />
      </div>
      <div className="bg-lgray text-center mt-6 p-5 h-[469px]">
        {createLink ? (
          <>
            <div className="flex text-left justify-center flex-col mb-6">
              <section className="flex justify-between w-full">
                <div className="flex items-center">
                  <Image
                    src="/images/TwoBar.svg"
                    alt="AddPhone"
                    width={20}
                    height={20}
                  />
                  <h4 className="paragraph font-bold">Link #1</h4>
                </div>

                <p className="paragraph">Remove</p>
              </section>
              <section>
                <div className=" text-left">
                  <label htmlFor="email" className="label text-left">
                    Platform
                  </label>
                  <div className="bg-white input-container border-bcolor">
                    <Image
                      src="/images/envelope.svg"
                      alt="env"
                      width={16}
                      height={16}
                    />
                    <select className="w-full bg-white ">
                      <option value="google">Google</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="label "
                    style={{ textAlign: 'left' }}
                  >
                    Link
                  </label>
                  <div className="input-container bg-white border-bcolor">
                    <Image
                      src="/images/links-black.svg"
                      alt="env"
                      width={16}
                      height={16}
                    />
                    <input
                      type="text"
                      id="email"
                      placeholder="e.g. https://www.github.com/johnappleseed"
                      className="w-full text-dgrap paragraph bg-transparent"
                    />
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : (
          <Fragment>
            <div className="text-center w-full flex justify-center">
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
          </Fragment>
        )}
      </div>
    </>
  )
}

export default CreateLink
