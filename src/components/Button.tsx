'use client'
import { Dispatch, SetStateAction } from 'react'

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
    <div onClick={handleClick}>
      {isLoading ? (
        <p>Loading.... </p>
      ) : (
        <button className={className}>{text}</button>
      )}
    </div>
  )
}

export default Button
