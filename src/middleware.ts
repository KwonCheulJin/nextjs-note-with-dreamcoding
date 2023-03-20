import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  console.log("🚀 ~ file: middleware.ts:4 ~ middleware ~ middleware 실행되고 있음!");
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log("🚀 ~ file: middleware.ts:4 ~ middleware ~ middleware 경로를 리다이렉팅 함!");
    return NextResponse.redirect(new URL('/products', request.url))
  }
}

export const config = {
  matcher: ['/products/:path*']
}