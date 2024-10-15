import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {

  const user = req.cookies.get("admin")?.value

  const loginUserAccessToPath = req.nextUrl.pathname === "/login"

  if (loginUserAccessToPath) {
    if (user) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
    } 
  } else {
    if (!user) {
      return NextResponse.redirect(new URL("/login", req.nextUrl))
    }
  }
    
}

export const config = {
  matcher: ['/dashboard', '/login'],  // This middleware will run only for /dashboard
}

