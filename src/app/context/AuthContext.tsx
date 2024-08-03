'use client'
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { auth } from '../../config'
import { AuthContextType, Users } from '@/types/Types'
import { doc, getDoc } from 'firebase/firestore'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { firestore } from '../../config'

// Create the AuthContext with the default value
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Define the AuthProvider component

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Function to create a new user
  const [userId, setUserId] = useState<string>('')
  const [userDetails, setUserDetails] = useState<Users>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    profileImageUrl: '',
    links: [],
  })
  const router = useRouter()

  // getting the user from the backend

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await response.json()
      if (response.ok) {
        console.log(result)
        const { firstName, lastName, email, profileImageUrl, links, id } =
          result
        setUserDetails({
          id,
          firstName,
          lastName,
          email,
          profileImageUrl,
          links,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserProfile()
  }, [userId])

  // Function to sign in an existing user
  // const signUser = async (
  //   email: string,
  //   password: string,
  //   setIsError: Dispatch<SetStateAction<boolean>>
  // ) => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     )
  //     const user = userCredential.user
  //     console.log(user.uid)
  //     setUserId(user.uid)
  //     if (user.uid) {
  //       setUserId(user.uid)
  //     }
  //     console.log(user)
  //     await fetchUserProfile(user)

  //     router.push('/links')

  //     // Handle successful sign-in (e.g., store user information)
  //   } catch (error) {
  //     console.log('Error signing in user:', error)

  //     setIsError(true)
  //     // Handle error (e.g., show error message to user)
  //   }
  // }

  const getData = async () => {
    try {
      const docRef = doc(firestore, 'Users') // Ensure 'userId' is a valid document ID
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data())
      } else {
        console.log('No such document!')
      }
    } catch (error) {
      console.error('Error getting document:', error)
    }
  }
  // const getTasks = async () => {
  //   const col = collection(db, 'Users')
  //   const snapshot = await getDocs(col)
  //   const newData = snapshot.docs.map((doc) => {
  //     return {
  //       id: doc.id,
  //       ...doc.data(),
  //     }
  //   })
  //   console.log(newData)
  // }

  // const getAll = async () => {
  //   // const querySnapshot = await getDocs(collection(db, 'Users'))
  //   // querySnapshot.forEach((doc) => {
  //   //   // doc.data() is never undefined for query doc snapshots
  //   //   console.log(doc.id, ' => ', doc.data())
  //   // })
  //   getTasks()
  // }

  //   const setDocs = async () => {
  //     const resp = await setDoc(doc(db, 'Users', 'LA'), {
  //       name: 'Los Angeles',
  //       state: 'CA',
  //       country: 'USA',
  //     })
  //     console.log(resp)
  //   }

  // uploading images
  // const uploadImage = async (file: File) => {

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        userDetails,
        setUserDetails,
        fetchUserProfile,

        getData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
