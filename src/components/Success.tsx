import Image from 'next/image'
import React from 'react'

interface Props {
  icon?: boolean
  message: string
  className?: string
}
const Success = ({ message, icon, className }: Props) => {
  return (
    <div className={`fixed flex justify-center  left-0 right-0 ${className}`}>
      <div className="flex gap-2 p-4 px-6 rounded-lg items-center bg-dgrap ">
        {icon && (
          <Image src="/images/floppy.svg" width={20} height={20} alt="" />
        )}
        <p className="paragraph   text-lgray">{message}</p>
      </div>
    </div>
  )
}

export default Success
