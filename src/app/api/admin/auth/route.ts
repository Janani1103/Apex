import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  verifyAdminPin,
  createAdminSessionToken,
  isAuthenticatedAdmin,
  COOKIE_NAME,
} from "@/lib/auth";

export async function GET() {
  const isAuth = isAuthenticatedAdmin();
  return NextResponse.json({ authenticated: isAuth });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pin } = body;

    if (!pin || !verifyAdminPin(pin)) {
      return NextResponse.json(
        { success: false, error: "Invalid Admin Passcode. Access Denied." },
        { status: 401 }
      );
    }

    const token = createAdminSessionToken();
    const cookieStore = cookies();

    // Set HTTP-only secure cookie valid for 24 hours
    cookieStore.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return NextResponse.json({
      success: true,
      message: "Admin authentication successful",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const cookieStore = cookies();
    cookieStore.delete(COOKIE_NAME);
    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to log out" },
      { status: 500 }
    );
  }
}

