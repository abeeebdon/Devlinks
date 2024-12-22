'use client'

import { Faq } from '@/components/data'
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

const FAqs = ({ qs, ans }: Faq) => {
  const [showAns, setShowAns] = useState(false)
  return (
    <article className="border-b border-gray p-2 mt-3">
      <div className="flex items-center justify-between w-full">
        <p className="text-dgrap">{qs}?</p>
        <FaAngleDown
          onClick={() => setShowAns(!showAns)}
          color="gray"
          size={20}
        />
      </div>
      {showAns && (
        <div className="mt-2 max-w-[500px] w-full text-gray">{ans}</div>
      )}
    </article>
  )
}

export default FAqs
