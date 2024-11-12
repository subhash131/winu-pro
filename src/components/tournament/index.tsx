"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getTournamentById } from "@/actions/tournament/get-tournament-by-id";
import Image from "next/image";

const TournamentCard = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["tournament", id],
    queryFn: () => getTournamentById(id.toString()),
  });
  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        {error.message}
      </div>
    );

  return (
    <div className="w-full h-screen px-24 py-4">
      <div className="w-full h-80 overflow-hidden rounded-lg bg-active relative">
        <Image
          src={data?.tournament?.image}
          alt="tournament"
          width={1}
          height={1}
          className="size-full object-cover"
        />
        <div className="absolute size-full bg-gradient-to-bl from-[rgba(0,0,0,0.1)] to-foreground top-0 left-0 px-4 py-2">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-2xl font-semibold">{data?.tournament?.name}</h3>
            <div className="flex items-center gap-1 text-green-400">
              <div className="size-2 rounded-full bg-green-500 animate-pulse" />
              <p>live</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
