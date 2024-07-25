'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { storage, firestore } from '../../src/config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useAuth } from '@/app/context/AuthContext'

const ProfileImage = () => {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const { userId, userDetails } = useAuth()
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const url = URL.createObjectURL(selectedFile)
      setImageUrl(url)
      console.log(userId)
      // Upload the file to Firebase Storage
      const saveImageUrlToFirestore = async (url: string) => {
        const userDocRef = doc(firestore, 'users', userId) // Replace 'user-id' with the actual user ID
        try {
          await setDoc(userDocRef, { profileImageUrl: url }, { merge: true })
          console.log('Image URL saved to Firestore')
        } catch (error) {
          console.error('Error saving image URL to Firestore:', error)
        }
      }
      const storageRef = ref(storage, `images/${selectedFile.name}`)
      try {
        await uploadBytes(storageRef, selectedFile)
        const downloadURL = await getDownloadURL(storageRef)
        console.log('File available at', downloadURL)
        // Optionally, you can set the download URL to state if needed
        // setImageUrl(downloadURL)
        await saveImageUrlToFirestore(downloadURL)
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }
  useEffect(() => {
    if (userDetails?.profileImageUrl) {
      setImageUrl(userDetails?.profileImageUrl)
    }
  }, [])

  return (
    <div className="w-full items-center p-5 mt-10 bg-lgray border rounded-lg mb-6 flex  gap-6">
      <p className="paragraph basis-[40%]">Profile Picture</p>
      <section className="border h-[255px] flex flex-row justify-between items-center p-8 gap-6">
        <div className="relative flex flex-col justify-center items-center bg-lpurple h-full w-full  p-4">
          <Image src="/images/upload.svg" alt="upload" width={40} height={40} />
          <p className="paragraph font-[600] text-purple mt-2">
            {imageUrl ? 'Change Image' : '+ Upload Image'}
          </p>
          <input
            type="file"
            placeholder="Choose an image"
            onChange={handleFileChange}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />
          {imageUrl && (
            <div className="absolute w-full h-full opacity-1 cursor-pointer">
              <Image src={imageUrl} width={193} height={193} alt="Profile" />
            </div>
          )}
        </div>
        <p className="label text-gray text-center sm:text-left">
          Image must be below 1024x1024px.
          <br /> Use PNG or JPG format.
        </p>
      </section>
    </div>
  )
}

export default ProfileImage
