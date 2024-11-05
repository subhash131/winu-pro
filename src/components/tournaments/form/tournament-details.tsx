"use client";
import React, { useState } from "react";
import Visibility from "./visibility";
import Schedule from "./schedule";

const TournamentDetails = () => {
  const [name, setName] = useState<string>("");
  const [visibility, setVisibility] = useState<"PUBLIC" | "PRIVATE">("PUBLIC");
  return (
    <div className="size-full">
      <div className="h-10 w-full">
        <Visibility setVisibility={setVisibility} visibility={visibility} />
      </div>
      <input
        className="text-5xl bg-transparent outline-none font-semibold"
        placeholder="Tournament Name"
      />
      <Schedule />
    </div>
  );
};

export default TournamentDetails;
