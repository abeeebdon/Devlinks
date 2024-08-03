import { NextRequest, NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../../../config'

export async function GET(req: NextRequest) {
  const userId = req.cookies.get('userUid')
  if (!userId) {
    return NextResponse.json(
      { error: 'User ID not found in cookies' },
      { status: 400 }
    )
  }

  const fetchUserProfile = async (userId: string) => {
    try {
      const docRef = doc(firestore, 'users', userId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const incomingData = docSnap.data()
        return NextResponse.json(incomingData)
      } else {
        return NextResponse.json(
          { error: 'No such document!' },
          { status: 404 }
        )
      }
    } catch (error) {
      console.error('Error fetching user profile:', error)
      return NextResponse.json(
        { error: 'Error fetching user profile' },
        { status: 500 }
      )
    }
  }

  return await fetchUserProfile(userId.value)
}
