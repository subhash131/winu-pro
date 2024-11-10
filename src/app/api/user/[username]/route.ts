import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";

export async function GET(
  req: NextRequest,
  { params: { username } }: { params: { username: string } }
) {
  console.log("🚀 ~ GET ~ username:", username);
  const user = await User.findOne({ username });
  return NextResponse.json({ user }, { status: 200 });
}
