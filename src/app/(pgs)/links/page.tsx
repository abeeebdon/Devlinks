'use client'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { firestore } from '../../../config'
import { doc, setDoc } from 'firebase/firestore'
import { useAuth } from '@/app/context/AuthContext'
import LinkCard from '../../../features/LinkCard'
import { Link } from '@/types/Types'
import { options } from '@/components/data'

const Links = () => {
  const { userId, userDetails, setUserDetails } = useAuth()

  const [createLink, setCreateLink] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [showLinks, setShowLinks] = useState(false)
  const [links, setLinks] = useState<Link[]>(userDetails.links)
  const [changesDone, setChangesDone] = useState<boolean>(false)
  const [linkData, setLinkData] = useState<Link>({
    id: 0,
    identifier: '',
    ref: '',
  })

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
      setChangesDone(true)
    } catch (error) {
      console.error('Error saving data to Firestore:', error)
    }
  }
  return (
    <section className="flex gap-6 mt-6 relative justify-between">
      <div className="hidden md:flex w-full p-[40px] h-[80vh] max-h-[834px] rounded-lg max-w-[560px] bg-white  justify-center items-center basis-[40%] ">
        <Image src="/images/phone.svg" alt="phone" width={300} height={630} />
      </div>
      <form
        className="md:basis-[60%] flex gap-2 flex-col pb-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <section className="max-h-[834px] bg-white h-[70vh] overflow-auto scrollBar  p-[40px] pb-12 rounded-lg">
          <div className="">
            <h2 className="heading text-dgrap ">Customize your links</h2>
            <p className="paragraph">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <Button
              text="+ Add new Link"
              onClick={setCreateLink}
              className="mt-[40px] py-[11px] px-[27x] hover:bg-lpurple w-full text-center paragraph font-[600] text-purple border border-purple rounded-lg"
            />
          </div>
          <div className=" bg-lgray text-center mt-6 p-5">
            {links.length > 0 ? (
              <>
                {links.map((link, index) => {
                  return (
                    <div key={index}>
                      <LinkCard link={link} id={index + 1} />
                    </div>
                  )
                })}
                {createLink && (
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
                          <h4 className="paragraph font-bold">
                            Link #{links.length + 1}
                          </h4>
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
                                setLinkData({
                                  ...linkData,
                                  id: links.length + 1,
                                  ref: e.target.value,
                                })
                              }}
                              placeholder="e.g. https://www.github.com/johnappleseed"
                              className="w-full text-dgrap paragraph bg-transparent"
                            />
                          </div>
                        </div>
                      </section>
                    </div>
                  </>
                )}
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
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </Fragment>
            )}
          </div>
        </section>

        <Button
          text="save"
          className=" bg-white flex justify-end cursor-pointer px-4 py-4"
          btnClassName="bg-purple text-white hover:bg-phover rounded-lg py-[11px] px-[27px] bg-opacity-25"
        />
      </form>
      {changesDone && (
        <div className="absolute bottom-0 left-0 bg-dgrap text-lgray">
          <p className="paragraph text-center">
            Your changes have been successfully saved!
          </p>
        </div>
      )}
    </section>
  )
}

export default Links
