import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    return NextResponse.redirect(new URL("/", req.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard',
}