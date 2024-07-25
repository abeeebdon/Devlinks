'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { storage } from '../../src/config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ProfileImage = () => {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const url = URL.createObjectURL(selectedFile)
      setImageUrl(url)

      // Upload the file to Firebase Storage
      const storageRef = ref(storage, `images/${selectedFile.name}`)
      try {
        await uploadBytes(storageRef, selectedFile)
        const downloadURL = await getDownloadURL(storageRef)
        console.log('File available at', downloadURL)
        // Optionally, you can set the download URL to state if needed
        // setImageUrl(downloadURL)
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  return (
    <div className="p-5 mt-10 bg-lgray rounded-lg mb-6 flex justify-between items-center gap-6">
      <p className="paragraph basis-[40%]">Profile Picture</p>

      <section className="flex justify-between gap-6 items-center ">
        <article className="w-[443px] h-[443px] flex flex-col justify-center items-center bg-lpurple">
          <Image src="/images/upload.svg" alt="upload" width={40} height={40} />
          <p className="paragraph font-[600] text-purple">
            {imageUrl ? 'Change Image' : '+ Upload Image'}
          </p>
        </article>
        <article>
          <p className="label text-gray  ">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </article>
      </section>
    </div>
  )
}

export default ProfileImage
