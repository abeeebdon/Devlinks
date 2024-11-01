import { NextRequest, NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../../../config'

export async function POST(req: NextRequest) {
  const links = req.body
  //   const fetchUserProfile = async (userId: string) => {
  //     try {
  //       const docRef = doc(firestore, 'users', userId)
  //       const docSnap = await getDoc(docRef)
  //       if (docSnap.exists()) {
  //         const incomingData = docSnap.data()
  //         return NextResponse.json(incomingData)
  //       } else {
  //         return NextResponse.json(
  //           { error: 'No such document!' },
  //           { status: 404 }
  //         )
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user profile:', error)
  //       return NextResponse.json(
  //         { error: 'Error fetching user profile' },
  //         { status: 500 }
  //       )
  //     }
  //   }
  const userDocRef = doc(firestore, 'users', userId)
  try {
    await setDoc(
      userDocRef,
      { ...userDetails, links: updatedLinks },
      { merge: true }
    )
    setChangesDone(true)
    setTimeout(() => setChangesDone(false), 3000) // Hide the message after 3 seconds
  } catch (error) {
    console.error('Error saving data to Firestore:', error)
  }

  return await fetchUserProfile(userId.value)
}
