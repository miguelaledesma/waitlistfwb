import { NextResponse } from "next/server";

// Get the count from environment variable or use default
function getCount(): number {
  const countStr = process.env.WAITLIST_COUNT;
  if (countStr) {
    const count = parseInt(countStr, 10);
    if (!isNaN(count)) {
      return count;
    }
  }
  return 10; // Default value
}

export async function GET() {
  const count = getCount();
  return NextResponse.json({ count });
}

export async function POST() {
  // In a serverless environment, we can't directly modify environment variables
  // Instead, we'll use a different approach with a database or external service
  // For now, we'll just increment the count in the response
  const currentCount = getCount();
  const newCount = currentCount + 1;

  // Log the new count so we can manually update the environment variable
  console.log(`New waitlist count: ${newCount}`);

  return NextResponse.json({ count: newCount });
}
