'use client'
import Success from '@/components/Success'
import { Link } from '@/types/Types'
import { useState } from 'react'

const DisplayingLink = ({ id, value, name }: Link) => {
  const [alert, setAlert] = useState(false)
  const displayLinks = [
    {
      identifier: 'github',
      bgColor: 'red',
    },
    {
      identifier: 'youtube',
      bgColor: 'blue',
    },
    {
      identifier: 'twitter',
      bgColor: 'green',
    },
  ]
  const content = displayLinks.find(
    (data) => data.identifier.toLowerCase() === name?.toLowerCase()
  )
  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 3000)
  }
  return (
    <>
      <div
        className="cursor-pointer w-full max-w-[200px] rounded-lg  text-white m-0 px-4 py-[11px] "
        style={{ backgroundColor: content?.bgColor }}
        onClick={handleCopy}
      >
        <p style={{ textTransform: 'capitalize' }}>{content?.identifier}</p>
      </div>
      {alert && (
        <Success message="Link copied successfully" className="top-0" icon />
      )}
    </>
  )
}

export default DisplayingLink
