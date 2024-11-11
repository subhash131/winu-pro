"use server";
import { Tournament } from "@/types";

export async function createTournament(tournament: Tournament) {
  const res = await fetch("http://localhost:3000/api/tournament/create", {
    method: "POST",
    body: JSON.stringify(tournament),
  }).then(async (res) => await res.json());
  return res;
}
