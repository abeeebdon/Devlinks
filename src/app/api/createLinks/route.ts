import { NextRequest, NextResponse } from 'next/server'
import { doc, setDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../../config'

export async function POST(req: NextRequest) {
  const links = await req.json() // Use await to parse the JSON body
  console.log(links, 'submitted')

  const userIdCook = req.cookies.get('userUid') // Extract userId from cookies
  const userId = userIdCook?.value
  if (!userId) {
    return NextResponse.json(
      { error: 'User ID not found in cookies' },
      { status: 400 } // Return a 400 status if userId is not found
    )
  }

  const userDocRef = doc(db, 'users', userId)

  try {
    // Assuming links is an array and you want to merge them with existing user details
    await setDoc(
      userDocRef,
      links,
      { merge: true }
      // Save links in the user document
    )

    return NextResponse.json({
      success: true,
      message: 'Links saved successfully.',
    })
  } catch (error) {
    const newErr = error
    console.error('Error saving data to Firestore:', error)
    return NextResponse.json(
      { error: 'Error saving data to Firestore.', newErr },
      { status: 500 } // Return a 500 status for server errors
    )
  }
}
