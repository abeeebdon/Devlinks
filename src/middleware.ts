// middleware.js
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
export function middleware(req: NextRequest) {
  const cookiesData = req.cookies.get('userUid')
  if (!cookiesData) {
    return NextResponse.redirect(new URL('/landing', req.url))
  }
}

export const config = {
  matcher: ['/profile', '/links', '/'],
}
