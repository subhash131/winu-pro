import { NextRequest, NextResponse } from "next/server";
import Tournament from "@/models/tournament";

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const user = await Tournament.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
