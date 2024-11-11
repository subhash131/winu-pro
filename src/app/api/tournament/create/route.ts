import { NextRequest, NextResponse } from "next/server";
import Tournament from "@/models/tournament";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name,
    visibility,
    streamLink,
    entryFee,
    startDate,
    endDate,
    description,
    image,
    matches,
    host,
    isActive,
  } = body;

  if (!name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  if (!streamLink)
    return NextResponse.json(
      { error: "Stream link is required" },
      { status: 400 }
    );
  if (!startDate)
    return NextResponse.json(
      { error: "Start date is required" },
      { status: 400 }
    );
  if (!endDate)
    return NextResponse.json(
      { error: "End date is required" },
      { status: 400 }
    );
  if (!host)
    return NextResponse.json({ error: "Host is required" }, { status: 400 });
  if (!matches)
    return NextResponse.json(
      { error: "Matches are required" },
      { status: 400 }
    );
  if (!image)
    return NextResponse.json({ error: "Image is required" }, { status: 400 });
  if (!entryFee)
    return NextResponse.json(
      { error: "Entry Fee is required" },
      { status: 400 }
    );

  const tournament = new Tournament({
    name,
    visibility,
    streamLink,
    entryFee,
    startDate,
    endDate,
    description,
    image,
    matches,
    host,
    isActive,
  });
  tournament.save();
  return NextResponse.json(
    { message: "New Tournament Created", tournament },
    { status: 201 }
  );
}
