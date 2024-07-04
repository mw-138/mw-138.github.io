import connect from "@/lib/db";
import User from "@/models/User";
import bycrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bycrypt.hash(password, 5);
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    return new NextResponse("User has registered", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
