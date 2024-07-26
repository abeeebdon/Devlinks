'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { firestore, auth } from '../../../config'

import {
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  addDoc,
} from 'firebase/firestore'
import Loading from '@/components/Loading'

type Users = {
  email: string
  password: string
  cPassword: string
}

const Signup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [userDetails, setUserDetails] = useState<Users>({
    email: '',
    password: '',
    cPassword: '',
  })
  const [emailErr, setEmailErr] = useState<boolean>(false)
  const [passwordErr, setPasswordErr] = useState<boolean>(false)

  const router = useRouter()
  const { userId, setUserId } = useAuth()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (userDetails.email === '') {
      setEmailErr(true)
    } else if (userDetails.password.length < 8) {
      setPasswordErr(true)
    } else if (userDetails.password !== userDetails.cPassword) {
      setPasswordErr(true)
    }
    const createUserProfile = async (user: any) => {
      setIsLoading(true)

      try {
        await setDoc(doc(firestore, 'users', user.uid), {
          email: user.email,
          firstName: '',
          lastName: '',
          profileImageUrl: '',
          links: [],
          createdAt: new Date(),
        })
        console.log('User profile created')
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
        console.error('Error creating user profile:', error)
      }
    }

    const createUser = async (email: string, password: string) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        const user = userCredential.user
        if (user.uid) {
          setUserId(user.uid)
        }
        await createUserProfile(user)
        router.push('/profile')
        // Handle successful user creation (e.g., store user information)
      } catch (error) {
        console.error(error)
        // Handle error (e.g., show error message to user)
      }
    }
    createUser(userDetails.email, userDetails.password)
  }

  return (
    <section className=" xs:p-[40px]">
      <h2 className="heading">Create account</h2>
      <p className="paragraph mt-2">
        Let’s get you started sharing your links!
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        onClick={() => {
          setPasswordErr(false)
          setEmailErr(false)
        }}
      >
        <div className="relative mt-[40px]">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <div
            className={`
              input-container ${emailErr ? 'border-red' : 'border-bcolor'}
            `}
          >
            <Image
              src="/images/envelope.svg"
              alt="env"
              width={16}
              height={16}
            />
            <input
              type="text"
              id="email"
              placeholder="e.g alex@gmail.com"
              value={userDetails.email}
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              className="text-dgrap paragraph"
            />
            {emailErr && <p className="err label ">Can’t be empty</p>}
          </div>
        </div>
        <div className="my-6 relative">
          <label htmlFor="createPass" className="label">
            Create Password
          </label>
          <div
            className={`
              input-container ${passwordErr ? 'border-red' : 'border-bcolor'}
            `}
          >
            <Image src="/images/lock.svg" alt="lock" width={16} height={16} />
            <input
              type="password"
              id="createPass"
              placeholder="Enter your password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              className="text-dgrap paragraph"
            />
            {passwordErr && <p className="err label">Please check again</p>}
          </div>
        </div>
        <div className="relative">
          <label htmlFor="confirmPass" className="label">
            Confirm password
          </label>
          <div
            className={`
              input-container ${passwordErr ? 'border-red' : 'border-bcolor'}
            `}
          >
            <Image src="/images/lock.svg" alt="lock" width={16} height={16} />

            <input
              type="password"
              id="confirmPass"
              placeholder="At least 8 characters"
              value={userDetails.cPassword}
              onChange={(e) =>
                setUserDetails({ ...userDetails, cPassword: e.target.value })
              }
            />
            {passwordErr && <p className="err label">Please check again</p>}
          </div>
        </div>
        <p className="label text-gray">
          Password must contain at least 8 characters
        </p>
        {isError && <p className='text-red'>There is an error</p>}
        <div>
          <Button
            isLoading={isLoading}
            text="Create new account"
            className="w-full py-[11px] my-6 cursor-pointer hover:bg-phover bg-purple paragraph text-white font-[600] text-center mb-6 rounded-lg"
          />
        </div>
      </form>

      <p className="paragraph text-center">
        Already have an account?{' '}
        <Link
          href="/login"
          className="text-purple block xs:inline hover:text-phover"
        >
          Login
        </Link>
      </p>
    </section>
  )
}

export default Signup
