import Image from 'next/image'
import React from 'react'

interface Props {
  imgSrc?: string
  name: string
  className: string
}
function LinkComponent({ imgSrc, name, className }: Props) {
  return (
    <section className={`flex items-center justify-end ${className}`}>
      <div className="flex items-center gap-3">
        <Image src={imgSrc ? imgSrc : ''} alt={name} width={20} height={20} />
        <p>{name}</p>
      </div>
      <div>
        <Image src="/icons/arrow-right" alt="arr" width={16} height={16} />
      </div>
    </section>
  )
}

export default LinkComponent
