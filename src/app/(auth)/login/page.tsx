'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/app/context/AuthContext'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoginValidationSchema } from '@/components/validation'

type Users = {
  email: string
  password: string
}

const Login = () => {
  const [userSignin, setUserSignin] = useState<Users>({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Users>({
    email: '',
    password: '',
  })
  const [isError, setIsError] = useState(false)
  const [passwordErr, setPasswordErr] = useState<boolean>(false)
  const { setUserDetails, userDetails, setUserId, fetchUserProfile } = useAuth()
  const router = useRouter()

  const submitForm = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userSignin.email,
          password: userSignin.password,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        const user = result.user
        setUserId(user.uid)
        setUserDetails({ ...userDetails, id: user.uid })
        await fetchUserProfile(user)
        router.push('/links')
      } else {
        setIsError(true)
        console.error('Login failed:', result.message)
      }
    } catch (error) {
      setIsError(true)
      console.error('Error logging in:', error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await LoginValidationSchema.validate(userSignin, { abortEarly: false })
    } catch (error: any) {
      // const newErrors: { [key: string]: string } = {} // Define the type of newErrors if using TypeScript
      // const errorSS = error?.inner || []

      // errorSS.forEach((err: any) => {
      //   newErrors[err.path] = err.message
      // })

      // // Set the errors once, after the loop
      // setErrors(newErrors)

      // // Logging the updated errors
      // setErrors(error.errors)
      // // console.log(newErrors)
      // const err = error.errors.map((err: string) => {
      //   console.log(error.errors)
      // })
      const errorObject = error.inner.reduce((acc: any, err: any) => {
        acc[err.path] = err.message // Accumulate errors by path (field name)
        return acc
      }, {})
      console.log(errorObject) // For debugging
      setErrors(errorObject)
      return errors // Return the error object
    }
    setIsLoading(true)
    // console.log('done')
    submitForm()
  }

  return (
    <section className="xs:p-[40px]">
      <h2 className="heading">Login</h2>
      <p className="paragraph mt-2">
        Add your details below to get back into the app
      </p>
      <form
        onSubmit={handleSubmit}
        onClick={() => {
          setErrors({ email: '', password: '' })
        }}
      >
        <div className="mt-[40px]">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <div
            className={`
              input-container ${errors.email ? 'border-red' : 'border-bcolor'}
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
              value={userSignin.email}
              onChange={(e) =>
                setUserSignin({ ...userSignin, email: e.target.value })
              }
              className="text-dgrap paragraph"
            />
          </div>
          {errors.email && <p className="err ">{errors.email}</p>}
        </div>
        <div className="my-6">
          <label htmlFor="createPass" className="label">
            Password
          </label>
          <div
            className={`
              input-container ${
                errors.password ? 'border-red' : 'border-bcolor'
              }
            `}
          >
            <Image src="/images/lock.svg" alt="lock" width={16} height={16} />
            <input
              type="password"
              id="createPass"
              placeholder="Enter your password"
              value={userSignin.password}
              onChange={(e) =>
                setUserSignin({ ...userSignin, password: e.target.value })
              }
              className="text-dgrap paragraph"
            />
          </div>
          {passwordErr && <p className="err label">Please check again</p>}
          {errors.password && <p className="err label">{errors.password}</p>}
        </div>
        <Button
          isLoading={isLoading}
          text="Login"
          className="w-full text-center py-[11px] cursor-pointer hover:bg-phover bg-purple paragraph text-white font-[600] mb-6 rounded-lg"
        />
      </form>

      <p className="paragraph text-center">
        Dont have an account?{' '}
        <Link
          href="/signup"
          className="text-purple block xs:inline hover:text-phover"
        >
          Create an account
        </Link>
      </p>
    </section>
  )
}

export default Login
