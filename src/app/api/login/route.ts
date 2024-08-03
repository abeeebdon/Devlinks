import { NextRequest, NextResponse } from 'next/server'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config' // Adjust the import path accordingly
import { serialize } from 'cookie'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    // Create a cookie with the user's UID
    const cookie = serialize('userUid', user.uid, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })

    const res = NextResponse.json({
      user: user,
      message: 'Login successful',
      uid: user.uid,
    })
    res.headers.set('Set-Cookie', cookie)

    return res
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Login failed', error: error.message },
      { status: 401 }
    )
  }
}
