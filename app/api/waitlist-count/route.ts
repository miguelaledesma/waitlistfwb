import { NextResponse } from "next/server";

// This is a simple in-memory solution that will reset when the server restarts
// In a production environment, you would use a database
let waitlistCount = 10;

export async function GET() {
  return NextResponse.json({ count: waitlistCount });
}

export async function POST() {
  waitlistCount += 1;
  return NextResponse.json({ count: waitlistCount });
}
