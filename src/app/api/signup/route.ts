import { NextRequest, NextResponse } from 'next/server'
import { serialize } from 'cookie'
import { auth } from '../../../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    const cookie = serialize('userUid', user.uid, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })
    const res = NextResponse.json({
      user: user,
      message: 'Signup successful',
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
