'use client'
import Link from 'next/link'
import Button from '@/components/Button'
import Image from 'next/image'
import { useState } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'

import { firestore } from '../../../config'

import { doc, setDoc } from 'firebase/firestore'

type Users = {
  email: string
  password: string
  cPassword: string
}

const Signup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [userSignup, setUserSignup] = useState<Users>({
    email: '',
    password: '',
    cPassword: '',
  })
  const [emailErr, setEmailErr] = useState<boolean>(false)
  const [passwordErr, setPasswordErr] = useState<boolean>(false)

  // {use States}
  const router = useRouter()
  const { userDetails, setUserDetails, setUserId } = useAuth()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (userSignup.email === '') {
      setEmailErr(true)
    } else if (userSignup.password.length < 8) {
      setPasswordErr(true)
      return
    } else if (userSignup.password !== userSignup.cPassword) {
      setPasswordErr(true)
      return
    }
    setIsLoading(true)
    const createUserProfile = async (user: any) => {
      try {
        await setDoc(doc(firestore, 'users', user.uid), {
          id: user.uid,
          email: user.email,
          firstName: '',
          lastName: '',
          profileImageUrl: '',
          links: [],
          createdAt: new Date(),
        })
        console.log('User profile created')
        // cookies().set('auth', user.uid)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
        console.error('Error creating user profile:', error)
      }
    }

    const createUser = async (email: string, password: string) => {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
        const result = await response.json()
        if (response.ok) {
          const { user, message, uid }: any = result
          setUserId(uid)
          setUserDetails({ ...userDetails, id: uid })
          await createUserProfile(user)
          router.push('/profile')
        } else {
          setIsLoading(false)
          throw new Error()
        }
        console.log(response)
        // Handle successful user creation (e.g., store user information)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
        // Handle error (e.g., show error message to user)
      }
    }
    createUser(userSignup.email, userSignup.password)
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
              value={userSignup.email}
              onChange={(e) =>
                setUserSignup({ ...userSignup, email: e.target.value })
              }
              className="text-dgrap paragraph bg-transparent w-full"
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
              value={userSignup.password}
              onChange={(e) =>
                setUserSignup({ ...userSignup, password: e.target.value })
              }
              className="text-dgrap paragraph bg-transparent w-full"
            />
          </div>
          <p className="label text-gray">
            Password must contain at least 8 characters
          </p>
          {passwordErr && (
            <p className="err label">
              Passwords do not match, Please check again
            </p>
          )}
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
              value={userSignup.cPassword}
              onChange={(e) =>
                setUserSignup({ ...userSignup, cPassword: e.target.value })
              }
              className="text-dgrap paragraph bg-lgray w-full"
            />
          </div>
          {passwordErr && (
            <p className="err label">
              Passwords do not match, Please check again
            </p>
          )}
        </div>

        {isError && <p className="text-red">There is an error</p>}
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
