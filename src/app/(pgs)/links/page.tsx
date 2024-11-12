'use client'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { useAuth } from '@/app/context/AuthContext'
import CreateLinkCard from '@/components/LinkCard'
import { Link } from '@/types/Types'
import { useRouter } from 'next/navigation'
import Success from '@/components/Success'

const Links = () => {
  const router = useRouter()
  const { userDetails, fetchUserProfile, errMsg, error } = useAuth()
  const [links, setLinks] = useState<Link[]>(userDetails.links)
  const [changesDone, setChangesDone] = useState(false)
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
    if (!error && userDetails?.links.length < 1) {
      setLoading(false)
    }
  }, [])
  // Handler to update a specific link in the array

  const updateLink = (index: number, updatedLink: Link) => {
    const newLinks = [...links]
    newLinks[index] = updatedLink
    setLinks(newLinks)
  }

  // Handler to add a new link
  const addLink = () => {
    if (links?.length > 0) {
      setLinks([...links, { name: '', value: '' }])
    } else setLinks([{ name: '', value: '' }])
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
      router.push('/preview')
      setTimeout(() => setChangesDone(false), 3000) // Hide the message after 3 seconds
      fetchUserProfile()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <form
        className="md:basis-[60%] flex gap-2 flex-col pb-6"
        onSubmit={handleSubmit}
      >
        <section className="max-h-[834px] bg-white h-[80vh] overflow-auto scrollBar p-4 md:p-[40px] pb-12 rounded-lg">
          <div className="text-center">
            <h2 className="heading text-dgrap">Customize your links</h2>
            <p className="paragraph">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button
              onClick={addLink}
              type="button"
              className="mt-[40px] py-[11px] px-[27px] hover:bg-lpurple w-full text-center paragraph font-[600] text-purple border border-purple outline-none rounded-lg"
            >
              + Add new Link
            </button>
          </div>

          <div className="text-center mt-6 p-2 flex flex-col gap-6">
            {links?.length > 0 ? (
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
            ) : loading ? (
              <p>Loading</p>
            ) : error ? (
              <p>There is an error </p>
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
        <div className="flex justify-end w-full bg-white pt-4 px-6">
          <Button
            text="Save"
            className="w-full sm:w-fit rounded-lg text-white leading-5 font-semibold cursor-pointer px-4 py-4 hover:opacity-20 bg-[#633CFF]"
          />
        </div>
      </form>
      {changesDone && <Success message="Changes saved successfully" icon />}
    </>
  )
}

export default Links
