import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ teams: ["one", "two"] });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ teams: ["one", "two"] });
}
