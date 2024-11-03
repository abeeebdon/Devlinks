'use client'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { useAuth } from '@/app/context/AuthContext'
import DisplayingLink from '@/features/DisplayingLink'
import CreateLinkCard from '@/components/LinkCard'
import { Link } from '@/types/Types'

const Links = () => {
  const { userId, userDetails, setUserDetails } = useAuth()
  const [links, setLinks] = useState<Link[]>(userDetails.links)
  const [changesDone, setChangesDone] = useState(false)

  useEffect(() => {
    console.log(userDetails.links?.length)
    if (userDetails.links) {
      setLinks(userDetails.links)
    }
    console.log(links.length)
  }, [userDetails])
  // Handler to update a specific link in the array

  const updateLink = (index: number, updatedLink: Link) => {
    const newLinks = [...links]
    newLinks[index] = updatedLink
    setLinks(newLinks)
  }

  // Handler to add a new link
  const addLink = () => {
    setLinks([...links, { name: '', value: '' }])
  }

  // Handler to remove a link by index
  const removeLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index)
    setLinks(newLinks)
  }

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      console.log('Submitting links:', links)
      // Make an API request to save links
      const response = await fetch('/api/createLinks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ links }),
      })
      const data = await response.json()
      setChangesDone(true)
      setTimeout(() => setChangesDone(false), 3000) // Hide the message after 3 seconds
      console.log(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section className="flex gap-6 mt-6 relative justify-between">
      <div className="hidden md:flex w-full xs:p-[40px] h-[75vh] max-h-[834px] rounded-lg max-w-[560px] bg-white justify-center items-center basis-[40%]">
        <div className="h-full">
          <Image
            src="/images/phone.svg"
            alt="phone"
            width={300}
            height={400}
            className="relative"
          />
          {/* <div className="absolute top-[38%]">
            {userDetails?.links?.map((data, index) => (
              <Fragment key={index}>
                <DisplayingLink data={data} />
              </Fragment>
            ))}
          </div> */}
        </div>
      </div>

      <form
        className="md:basis-[60%] flex gap-2 flex-col pb-6"
        onSubmit={handleSubmit}
      >
        <section className="max-h-[834px] bg-white h-[80vh] overflow-auto scrollBar p-[40px] pb-12 rounded-lg">
          <div className="text-center">
            <h2 className="heading text-dgrap">Customize your links</h2>
            <p className="paragraph">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <Button
              text="+ Add new Link"
              onClick={addLink}
              className="mt-[40px] py-[11px] px-[27px] hover:bg-lpurple w-full text-center paragraph font-[600] text-purple border border-purple outline-none rounded-lg"
            />
          </div>

          <div className="bg-lgray text-center mt-6 p-5">
            {links.length > 0 ? (
              links.map((link, index) => (
                <CreateLinkCard
                  key={index}
                  index={index}
                  name={link.name}
                  value={link.value}
                  onUpdate={(updatedLink: Link) =>
                    updateLink(index, updatedLink)
                  }
                  onRemove={() => removeLink(index)}
                />
              ))
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
          text="Save"
          className="bg-white flex justify-end cursor-pointer px-4 py-4"
        />
      </form>
      {changesDone && <p className="fixed bottom-0 left-0">changes done</p>}
    </section>
  )
}

export default Links
