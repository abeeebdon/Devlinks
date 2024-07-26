import { SetStateAction, Dispatch } from 'react'
export type AuthContextType = {
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
  signUser: (email: string, password: string) => Promise<void>
  getData: () => Promise<void>
  userDetails: Users
  setUserDetails: Dispatch<SetStateAction<Users>>
}
export type Users = {
  firstName: string
  lastName: string
  email: string
  profileImageUrl: string
  links: Link[]
}
export type Link = { id: number; identifier: string; ref: string }
