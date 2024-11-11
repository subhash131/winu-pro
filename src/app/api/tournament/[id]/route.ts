import { NextRequest, NextResponse } from "next/server";
import Tournament from "@/models/tournament";
import { connect } from "@/db/config";

connect();
export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  console.log("🚀 ~ id:", id);
  try {
    const tournament = await Tournament.findById(id);
    return NextResponse.json({ tournament }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Failed to load the tournament" },
      { status: 400 }
    );
  }
}
