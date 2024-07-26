'use client'
import { useState, useEffect } from 'react'
import { CgSpinner } from 'react-icons/cg'
import Button from './Button'

type Props = {
  isLoading: boolean
}
const Loading = (props: Props) => {
  const { isLoading } = props

  return <>{isLoading && <CgSpinner />}</>
}
export default Loading
