'use client'
import { Dispatch, SetStateAction } from 'react'
import { CgSpinner } from 'react-icons/cg'

type Props = {
  className: string
  btnClassName?: string
  text: string
  onClick?: Dispatch<SetStateAction<boolean>>
  isLoading?: boolean
}
const Button = (props: Props) => {
  const { className, text, onClick, isLoading, btnClassName } = props
  const handleClick = () => {
    if (onClick) {
      onClick(true) // Sets the state to true
    }
  }

  return (
    <div className={className} onClick={handleClick}>
      {isLoading ? (
        <CgSpinner className="mx-auto w-[3rem] text-[3rem] text-white animate-spin" />
      ) : (
        <button className={btnClassName}>{text}</button>
      )}
    </div>
  )
}

export default Button
