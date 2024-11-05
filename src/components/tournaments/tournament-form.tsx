import Image from "next/image";
import React from "react";
import Logo from "../logo";

const TournamentForm = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col py-8 px-24 gap-4">
      <h2 className="text-xl font-semibold">Host a Tournament</h2>
      <div className="size-full flex">
        <div className="size-96 relative bg-foreground shrink-0 rounded-xl border border-active">
          <Logo className="size-full pointer-events-none" />
          <input
            className="size-full opacity-0 absolute top-0 left-0"
            type="file"
          />
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default TournamentForm;
