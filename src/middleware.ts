import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {getToken} from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith("/admin-dashboard")) {
    // Get the referer (previous page URL)
    const referer = request.headers.get("referer");

    // If no session exists, redirect to previous page or homepage
    if (!token) {
      return NextResponse.redirect(referer || new URL("/", request.url));
    }
    // If user is not admin or doesn't have the specific email, redirect to previous page or homepage
    if (token.email !== process.env.ADMIN && token.role !== "Admin") {
      return NextResponse.redirect(referer || new URL("/", request.url));
    }
  }

  // Continue with the request if all checks pass
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
