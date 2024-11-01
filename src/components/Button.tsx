'use client'
import { Dispatch, SetStateAction } from 'react'
import { CgSpinner } from 'react-icons/cg'

type Props = {
  className: string
  text: string
  onClick?: Dispatch<SetStateAction<boolean>>
  isLoading?: boolean
}
const Button = (props: Props) => {
  const { className, text, onClick, isLoading } = props
  const handleClick = () => {
    if (onClick) {
      onClick(true) // Sets the state to true
    }
  }

  return (
    <>
      {isLoading ? (
        <div className={className}>
          <CgSpinner className="mx-auto w-[3rem] text-[3rem] text-white animate-spin" />
        </div>
      ) : (
        <button onClick={handleClick} className={className}>
          {text}
        </button>
      )}
    </>
  )
}

export default Button
