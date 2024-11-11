import { NextResponse } from "next/server";
import Tournament from "@/models/tournament";
import { connect } from "@/db/config";

connect();
export async function GET() {
  try {
    const tournaments = await Tournament.find();
    return NextResponse.json({ tournaments }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "failed to load data, refresh the page" },
      { status: 400 }
    );
  }
}
