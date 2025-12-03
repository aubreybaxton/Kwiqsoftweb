
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const { nextUrl } = req;
//   const protectedRoutes = ["/account"];
//   const isProtectedRoute = protectedRoutes.some((route) =>
//     nextUrl.pathname.startsWith(route)
//   );
//   if (isProtectedRoute) {
//     const token = req.cookies.get("arb-token")?.value;
//     if (!token) {
//       if (nextUrl.pathname !== "/") {
//         return NextResponse.redirect(new URL("/", req.url));
//       }
//     }
//   }
//   return NextResponse.next();
// }
// export const config = {
//   matcher: ["/account/:path*"],
// };

