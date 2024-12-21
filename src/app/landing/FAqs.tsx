'use client'

import { Faq } from '@/components/data'
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

const FAqs = ({ qs, ans }: Faq) => {
  const [showAns, setShowAns] = useState(false)
  return (
    <article className="border-b border-gray p-2 mt-2">
      <div className="flex items-center justify-between w-full">
        <p>{qs}</p>
        <FaAngleDown onClick={() => setShowAns(!showAns)} />
      </div>
      {showAns && (
        <div className="mt-2 max-w-[500px] w-full text-sm text-[rgb(0,0,120)]">
          {ans}
        </div>
      )}
    </article>
  )
}

export default FAqs
