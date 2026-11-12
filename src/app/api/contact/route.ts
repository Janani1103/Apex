import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required contact fields." },
        { status: 400 }
      );
    }

    const ticketId = `GLO-MSG-${Math.floor(10000 + Math.random() * 90000)}`;

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Apex World. Our team will respond shortly.",
      ticketId,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}

