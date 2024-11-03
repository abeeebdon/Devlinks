import { SetStateAction, Dispatch } from 'react'
export type AuthContextType = {
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
  fetchUserProfile: (user: any) => Promise<void>
  getData: () => Promise<void>
  userDetails: Users
  setUserDetails: Dispatch<SetStateAction<Users>>
}
export type Users = {
  id: string
  firstName: string
  lastName: string
  email: string
  profileImageUrl: string
  links: Link[]
}
export type Link = { id?: number; value: string; name: string }
