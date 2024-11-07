import React from "react";
import Logo from "../ui/logo";

const TournamentCard = () => {
  return (
    <div className="border rounded-lg border-active shrink-0 overflow-y-scroll no-scrollbar h-full w-full bg-foreground flex flex-col items-center overflow-hidden p-1  cursor-pointer">
      <div className="w-full h-60 bg-gray-500 rounded-t-lg">
        <Logo className="size-full" />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full items-center justify-between text-xs flex">
          <p className="text-lg font-semibold">Tournament Name</p>
          <div className="flex items-center gap-1 text-green-400">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <p>open</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-4">
          <p className="text-xs text-gray-400">Starts: 12/01/1999</p>
          <p className="text-xs text-gray-400">Ends: 12/01/1999</p>
        </div>
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
  );
};

export default TournamentCard;
