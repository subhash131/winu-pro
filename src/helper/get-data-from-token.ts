import { NextRequest } from "next/server";

export async function getDataFromToken(req:NextRequest) {
  try {
    req.cookies.get("WINU-")
  } catch (e) {}
}
