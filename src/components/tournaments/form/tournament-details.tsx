"use client";
import React, { useState } from "react";
import Visibility from "./visibility";
import Schedule from "./schedule";
import TournamentName from "./tournament-name";
import TournamentDescription from "./tournament-description";

const TournamentDetails = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [visibility, setVisibility] = useState<"PUBLIC" | "PRIVATE">("PUBLIC");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  return (
    <div className="size-full flex flex-col gap-2">
      <Visibility setVisibility={setVisibility} visibility={visibility} />
      <TournamentName name={name} setName={setName} />
      <Schedule
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <TournamentDescription
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};

export default TournamentDetails;
