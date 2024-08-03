'use client'
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { firestore } from '../config'

import Image from 'next/image'
import { useAuth } from '@/app/context/AuthContext'

type Prop = {
  link: Props
  id: number
}
type Props = {
  identifier: string
  ref: string
}
const LinkCard = (props: Prop) => {
  const { link, id } = props
  const { userId } = useAuth()
  const handleRemove = async () => {
    console.log(link)
    const deleteLinkFromUser = async (userId: string, linkToDelete: any) => {
      const userDocRef = doc(firestore, 'users', userId)

      // Get the document to retrieve the current array
      const userDoc = await getDoc(userDocRef)
      if (userDoc.exists()) {
        const userData = userDoc.data()

        // Check if the link exists in the array
        if (
          userData.links &&
          userData.links.some((link: any) => link.identifier === linkToDelete)
        ) {
          const updatedLinks = userData.links.filter(
            (link: any) => link.identifier !== linkToDelete
          )

          try {
            await updateDoc(userDocRef, {
              links: updatedLinks,
            })
            console.log('Link removed successfully')
          } catch (error) {
            console.error('Error removing link:', error)
          }
        } else {
          console.log('Link not found in the array')
        }
      } else {
        console.log('User document not found')
      }
    }
    deleteLinkFromUser(userId, link)
  }
  return (
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
            <h4 className="paragraph font-bold">Link {id}</h4>
          </div>

          <p className="paragraph" onClick={handleRemove}>
            Remove
          </p>
        </section>
        <section>
          <div className=" relative text-left">
            <label htmlFor="email" className="label text-left">
              Platform
            </label>
            <div className="focus-within:shadow-xl bg-white input-container border-bcolor flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p>{link.identifier}</p>
              </div>

              <span>▼</span>
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
                id="text"
                value={link.ref}
                placeholder="e.g. https://www.github.com/johnappleseed"
                className="w-full text-dgrap paragraph bg-transparent"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default LinkCard
