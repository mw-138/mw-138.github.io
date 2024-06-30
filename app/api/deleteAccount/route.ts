import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectMongoDB();
    const { email } = await req.json();

    const deleted = await User.deleteOne({ email });
    if (!deleted.acknowledged) {
      return NextResponse.json(
        { message: "Failed to delete email", success: false },
        { status: 500 },
      );
    }

    console.log("Deleted email: ", email);

    return NextResponse.json(
      { message: "Deleted user.", success: true },
      { status: 201 },
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
