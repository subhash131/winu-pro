import React from "react";
import TournamentCard from "./tournament-card";

const TournamentsGrid = () => {
  return (
    <div className="w-[75%] h-[calc(100vh-5rem)] grid [grid-template-columns:repeat(auto-fill,minmax(310px,1fr))] px-10 py-12 gap-4 overflow-y-scroll custom-scrollbar">
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
