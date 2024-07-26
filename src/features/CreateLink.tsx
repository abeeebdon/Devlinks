'use client'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { storage, firestore } from '../config'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { useAuth } from '@/app/context/AuthContext'

interface Link {
  identifier: string
  ref: string
}

const CreateLink = () => {
  const { userId, userDetails, setUserDetails } = useAuth()

  const options = [
    {
      value: 'Google',
      label: 'Google',
      imageUrl: '/images/frontendMentor1.svg',
    },
    {
      value: 'FrontendMentor',
      label: 'FrontendMentor',
      imageUrl: '/images/frontendMentor1.svg',
    },
  ]
  const [createLink, setCreateLink] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [showLinks, setShowLinks] = useState(false)
  const [links, setLinks] = useState<Link[]>([])
  const [linkData, setLinkData] = useState<Link>({ identifier: '', ref: '' })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const updatedLinks = [...links, linkData]
    setLinks(updatedLinks)
    setUserDetails({ ...userDetails, links: updatedLinks })

    const userDocRef = doc(firestore, 'users', userId)
    try {
      await setDoc(
        userDocRef,
        { ...userDetails, links: updatedLinks },
        { merge: true }
      )
      console.log('Done')
    } catch (error) {
      console.error('Error saving data to Firestore:', error)
    }
  }

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
      <form onSubmit={(e) => handleSubmit(e)}>
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
                  <div className=" relative text-left">
                    <label htmlFor="email" className="label text-left">
                      Platform
                    </label>
                    <div
                      onClick={() => setShowLinks(!showLinks)}
                      className="focus-within:shadow-xl bg-white input-container border-bcolor flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={selectedOption.imageUrl}
                          alt={selectedOption.label}
                          width={16}
                          height={16}
                        />
                        <p>{selectedOption.label}</p>
                      </div>

                      <span>▼</span>
                    </div>
                    {showLinks && (
                      <div className="w-full absolute mt-2 bottom-0 z-10 bg-white border rounded inset-0">
                        {options.map((option) => (
                          <div
                            key={option.value}
                            className="options flex items-center px-4 gap-2  border-b-[1px] py-2  cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                              setSelectedOption(option)
                              setLinkData({
                                ...linkData,
                                identifier: selectedOption.value,
                              })

                              setShowLinks(false)
                            }}
                          >
                            <Image
                              src={option.imageUrl}
                              alt={option.label}
                              width={16}
                              height={16}
                            />

                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
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
                        id="text"
                        value={linkData.ref}
                        onChange={(e) => {
                          setLinkData({ ...linkData, ref: e.target.value })
                        }}
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
        <div className=" absolute flex justify-end  p-6 cursor-pointer mt-10">
          <Button
            text="save"
            className="text-white hover:bg-phover rounded-lg bg-[#633CFF] bg-opacity-25 py-[11px] px-[27px]"
          />
        </div>
      </form>
    </>
  )
}

export default CreateLink
