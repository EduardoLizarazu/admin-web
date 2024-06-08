import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import firebase_app from "app/firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (new URL(request.url).pathname === "/login") {
    return NextResponse.next();
  }
  if (request.cookies.has("accessToken")) {
    let cookie = request.cookies.get("accessToken");
    // console.log(cookie);
    // Aquí puedes añadir la lógica para manejar la cookie si es necesario
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher : [
        "/",
        "/dashboard",
        "/consumer",
        "/supplier",
    ]
};
