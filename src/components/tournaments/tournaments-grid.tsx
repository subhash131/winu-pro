import React from "react";
import TournamentCard from "./tournament-card";

const TournamentsGrid = () => {
  return (
    <div className="w-[75%] h-full grid [grid-template-columns:repeat(auto-fill,minmax(310px,1fr))] [grid-auto-rows:384px] px-10 py-12 gap-4 overflow-y-scroll custom-scrollbar">
      <TournamentCard />
      <TournamentCard />
      <TournamentCard />
      <TournamentCard />
      <TournamentCard />
      <TournamentCard />
      <TournamentCard />
    </div>
  );
};

export default TournamentsGrid;
