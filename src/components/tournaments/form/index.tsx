import React from "react";
import TournamentImage from "./tournament-image";
import TournamentDetails from "./tournament-details";

const TournamentForm = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col py-8 px-24 gap-4">
      <h2 className="text-xl font-semibold">Host a Tournament</h2>
      <div className="size-full flex gap-10">
        <TournamentImage />
        <TournamentDetails />
      </div>
    </div>
  );
};

export default TournamentForm;
