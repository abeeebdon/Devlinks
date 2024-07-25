'use client'
import ProfileImage from '@/features/ProfileImage'
import Image from 'next/image'
import { storage, firestore } from '../../../config'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { useAuth } from '@/app/context/AuthContext'
import { useEffect, useState } from 'react'

const Profile = () => {
  // datas coming from useContext
  const { userId, userDetails, setUserDetails } = useAuth()

  // send the data to backend
  const setDatas = async (e: any) => {
    e.preventDefault()
    const userDocRef = doc(firestore, 'users', userId) // Replace 'user-id' with the actual user ID
    try {
      await setDoc(userDocRef, userDetails, { merge: true })
      console.log('Image URL saved to Firestore')
    } catch (error) {
      console.error('Error saving image URL to Firestore:', error)
    }
  }
  console.log(userDetails)
  return (
    <section className="flex mt-8 gap-6 justify-between ">
      <div className="hidden md:flex w-full p-[40px] h-[834px] rounded-lg max-w-[560px] bg-white  justify-center items-center basis-[40%] ">
        <Image src="/images/phone.svg" alt="phone" width={300} height={630} />
      </div>
      <div className="bg-white w-full basis-[60%] p-[40px] pb-0 rounded-lg">
        <h2 className="heading text-dgrap ">Profile Details</h2>
        <p className="paragraph">
          Add your details to create a personal touch to your profile.
        </p>
        <ProfileImage />
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
    </section>
  )
}

export default Profile
