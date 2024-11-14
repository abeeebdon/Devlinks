'use client'
import Image from 'next/image'
import { storage, firestore } from '../../../config'
import { doc, setDoc } from 'firebase/firestore'
import { useAuth } from '@/app/context/AuthContext'
import { useEffect, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import Success from '@/components/Success'

const Profile = () => {
  // datas coming from useContext
  const { userId, userDetails, setUserDetails } = useAuth()
  const [downloadedUrl, setDownloadedUrl] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  // onMounting check for image from the backend

  useEffect(() => {
    if (userDetails?.profileImageUrl) {
      setImageUrl(userDetails?.profileImageUrl)
    }
  }, [userDetails])

  // handles the addition of images
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile)
      setImageUrl(url)
      // Upload the file to Firebase Storage
      const saveImageUrlToFirestore = async (url: string) => {
        const userDocRef = doc(firestore, 'users', userDetails.id) // Replace 'user-id' with the actual user ID
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
        setDownloadedUrl(downloadURL)
        console.log('File available at', downloadURL)
        // Optionally, you can set the download URL to state if needed
        // setImageUrl(downloadURL)
        await saveImageUrlToFirestore(downloadURL)
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  // send the data to backend on submit
  const setDatas = async (e: any) => {
    e.preventDefault()
    setUserDetails({ ...userDetails, profileImageUrl: downloadedUrl })

    const userDocRef = doc(firestore, 'users', userId) // Replace 'user-id' with the actual user ID
    try {
      await setDoc(userDocRef, userDetails, { merge: true })
      setDone(true)
      console.log('Image URL saved to Firestore')
    } catch (error) {
      console.error('Error saving image URL to Firestore:', error)
    }
  }
  return (
    <>
      <div className="md:basis-[60%] bg-white w-full  p-[40px] pb-0 rounded-lg">
        <h2 className="heading text-dgrap ">Profile Details</h2>
        <p className="paragraph">
          Add your details to create a personal touch to your profile.
        </p>
        <div className="w-full items-center p-5 mt-10 bg-lgray  rounded-lg mb-6 flex  gap-6">
          <p className="paragraph basis-[40%]">Profile Picture</p>
          <section className=" h-[255px] flex flex-row justify-between items-center p-8 gap-6">
            <div className="relative flex flex-col justify-center items-center bg-lpurple h-full w-full  p-4">
              <Image
                src="/images/upload.svg"
                alt="upload"
                width={40}
                height={40}
              />
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
                  <Image
                    src={imageUrl}
                    width={193}
                    height={193}
                    alt="Profile"
                  />
                </div>
              )}
            </div>
            <p className="label text-gray text-center sm:text-left">
              Image must be below 1024x1024px.
              <br /> Use PNG or JPG format.
            </p>
          </section>
        </div>
        <form onSubmit={(e) => setDatas(e)}>
          <div className="bg-lgray p-5">
            <div className="flex justify-between items-center">
              <label className="paragraph">First name*</label>
              <input
                type="text"
                placeholder="Ben"
                value={userDetails.firstName}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, firstName: e.target.value })
                }
                className=" p-3 bg-white paragraph w-full max-w-[344px] text-dgrap border border-[#D9D9D9] rounded"
              />
            </div>
            <div className="flex justify-between items-center my-3">
              <label className="paragraph">Lastname</label>
              <input
                type="text"
                placeholder="Wright"
                value={userDetails.lastName}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, lastName: e.target.value })
                }
                className="p-3 bg-white paragraph w-full max-w-[344px] text-dgrap border border-[#D9D9D9] rounded"
              />
            </div>
            <div className="flex justify-between items-center ">
              <label className="paragraph">Email</label>
              <input
                type="email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                placeholder="ben@example.com"
                className="p-3 bg-white w-full max-w-[344px] paragraph text-dgrap border border-[#D9D9D9] rounded"
              />
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Save
          </button>
        </form>
      </div>
      {done && (
        <Success
          message=" Your changes have been successfully saved!"
          icon
          className="bottom-0"
        />
      )}
    </>
  )
}

export default Profile
