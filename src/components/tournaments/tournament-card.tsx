import React from "react";
import Image from "next/image";
import Link from "next/link";

const TournamentCard = () => {
  return (
    <Link
      href="/tournaments/1"
      className="relative border rounded-lg border-active shrink-0 no-scrollbar h-full w-full bg-foreground flex flex-col items-center overflow-hidden cursor-pointer"
    >
      <div className="w-full h-60 rounded-t-lg flex items-center justify-center">
        <Image
          src="/logo-white.png"
          alt="logo"
          width={1}
          height={1}
          className="size-full object-cover"
        />
      </div>
      <div className="absolute size-full flex flex-col bg-gradient-to-b from-transparent to-foreground justify-between p-2">
        <div className="w-full items-start justify-between text-xs flex flex-col">
          <div className="flex size-full justify-between">
            <p className="text-lg font-semibold">Tournament Name</p>
            <div className="flex items-center gap-1 text-green-400">
              <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
              <p>live</p>
            </div>
          </div>
          <p className="text-xs hover:underline hover:text-purple w-fit">
            @host
          </p>
        </div>
        <div>
          <div className="flex gap-2 py-2">
            <div className="size-6 rounded-full bg-red-50"></div>
            <p className="font-semibold">PUBG</p>
          </div>
          <div className="w-full flex items-center ">
            <div className="size-6 rounded-full bg-red-50"></div>
            <div className="size-6 rounded-full bg-red-50"></div>
            <div className="size-6 rounded-full bg-red-50"></div>
            <div className="size-6 rounded-full bg-red-50"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TournamentCard;
