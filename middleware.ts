import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export default auth((req) => {
  const { nextUrl } = req
  const pathname = nextUrl.pathname

  const isLoggedIn = !!req.auth
  const role = req.auth?.user?.role

  const isAdminRoute = pathname.startsWith('/admin')
  const requiresAuth = isAdminRoute || pathname.startsWith('/my-account') || pathname === '/profile'

  // If not logged in and the route requires auth, redirect to sign-in with a callback
  if (!isLoggedIn && requiresAuth) {
    const callbackUrl = `${pathname}${nextUrl.search}`
    return NextResponse.redirect(new URL(`/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`, nextUrl))
  }

  // Enforce staff-only access to /admin
  if (isAdminRoute && role !== 'staff') {
    return NextResponse.redirect(new URL('/401', nextUrl))
  }

  // Prevent signed-in users from visiting the sign-in page
  if (isLoggedIn && pathname.startsWith('/auth/signin')) {
    return NextResponse.redirect(new URL('/', nextUrl))
  }

  return NextResponse.next()
})

// Limit middleware to only the routes we care about
export const config = {
  matcher: [
    '/admin/:path*',
    '/my-account/:path*',
    '/profile',
    '/auth/signin'
  ]
}
