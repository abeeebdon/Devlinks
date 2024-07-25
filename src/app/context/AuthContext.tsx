'use client'
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { auth } from '../../config'
import {
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  addDoc,
} from 'firebase/firestore'
import { db } from '../../config'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { firestore } from '../../config'
// Define the AuthContext type
type AuthContextType = {
  userId: string
  createUser: (email: string, password: string) => Promise<void>
  signUser: (email: string, password: string) => Promise<void>
  getData: () => Promise<void>
  getAll: () => Promise<void>
  setDocs: (task: Task) => Promise<void>
  userDetails: Users
  setUserDetails: Dispatch<SetStateAction<Users>>
}
type Users = {
  firstName: string
  lastName: string
  email: string
  profileImageUrl: string
}
type Task = {
  name: string
  password: string
}

// Create the AuthContext with the default value
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Define the AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Function to create a new user
  const [userId, setUserId] = useState<string>('')
  const [userDetails, setUserDetails] = useState<Users>({
    firstName: '',
    lastName: '',
    email: '',
    profileImageUrl: '',
  })
  const router = useRouter()
  const createUserProfile = async (user: any) => {
    try {
      await setDoc(doc(firestore, 'users', user.uid), {
        email: user.email,
        createdAt: new Date(),
      })
      console.log('User profile created')
    } catch (error) {
      console.error('Error creating user profile:', error)
    }
  }

  const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      if (user.uid) {
        setUserId(user.uid)
      }
      await createUserProfile(user)
      router.push('/profile')
      // Handle successful user creation (e.g., store user information)
    } catch (error) {
      console.error('Error creating user:', error)
      // Handle error (e.g., show error message to user)
    }
  }

  const fetchUserProfile = async (user: any) => {
    try {
      const docRef = doc(firestore, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const incomingData = docSnap.data()
        console.log(incomingData)
        const { firstName, lastName, email, profileImageUrl } = incomingData
        setUserDetails({ firstName, lastName, email, profileImageUrl })
      } else {
        console.log('No such document!')
      }
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

  // Function to sign in an existing user
  const signUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      if (user.uid) {
        setUserId(user.uid)
      }
      console.log(user)
      await fetchUserProfile(user)

      router.push('/links')

      // Handle successful sign-in (e.g., store user information)
    } catch (error) {
      console.log('Error signing in user:', error)

      // Handle error (e.g., show error message to user)
    }
  }

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
  const getTasks = async () => {
    const col = collection(db, 'Users')
    const snapshot = await getDocs(col)
    const newData = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
    console.log(newData)
  }

  const getAll = async () => {
    // const querySnapshot = await getDocs(collection(db, 'Users'))
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, ' => ', doc.data())
    // })
    getTasks()
  }
  const setDocs = async (task: Task) => {
    const col = collection(db, 'Users')
    try {
      addDoc(col, {
        name: task.name,
        password: task.password,
      })
      console.log(col)
      router.push('/')
    } catch (error) {}
  }

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
        createUser,
        userDetails,
        setUserDetails,
        signUser,
        getData,
        getAll,
        setDocs,
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
