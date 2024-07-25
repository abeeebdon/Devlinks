'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { storage } from '../app/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ProfileImage = () => {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`)
      try {
        await uploadBytes(storageRef, file)
        const downloadURL = await getDownloadURL(storageRef)
        console.log('File available at', downloadURL)
        // Do something with the download URL (e.g., save it to the database)
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const url = URL.createObjectURL(selectedFile)
      setImageUrl(url)
    }
    handleUpload()
  }
  return (
    <div className=" p-5 mt-10 bg-lgray rounded-lg mb-6 flex justify-between items-center gap-6">
      <p className="paragraph basis-[40%]">Profile Picture</p>

      <div className="flex justify-between gap-6 items-center ">
        <div className=" relative bg-lpurple w-[193px] h-[193px] rounded-lg text-center pt-[61px] pb-[60px] flex flex-col justify-center items-center">
          <div
            className={`  my-2 basis-[80%] ${
              imageUrl ? 'bg-white' : 'bg-purple'
            }  `}
          >
            <Image
              src="/images/upload.svg"
              alt="upload"
              width={40}
              height={40}
            />
          </div>
          <p className="paragraph font-[600] text-purple">
            {imageUrl ? 'Change Image' : '+ Upload Image'}
          </p>
          {imageUrl && (
            <div className="absolute  w-full h-full opacity-1 cursor-pointer">
              <Image
                src={imageUrl}
                width={193}
                height={193}
                alt="my_image"
                className="object-cover"
              />
            </div>
          )}
          <input
            type="file"
            placeholder="Choose an image"
            onChange={handleFileChange}
            className="absolute  w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <p className="label text-gray min-w-[100px] w-full max-w-[127px]">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  )
}

export default ProfileImage
