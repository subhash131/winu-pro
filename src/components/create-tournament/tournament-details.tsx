"use client";
import React, { useState } from "react";
import Visibility from "./visibility";
import Schedule from "./schedule";
import TournamentName from "./tournament-name";
import TournamentDescription from "./tournament-description";
import CreateButton from "./create-button";
import EntryFee, { fee } from "./entry-fee";

const TournamentDetails = () => {
  const [name, setName] = useState<string>("");
  const [streamLink, setStreamLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [visibility, setVisibility] = useState<"PUBLIC" | "PRIVATE">("PUBLIC");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedEntryFee, setSelectedEntryFee] = useState(0);
  return (
    <div className="size-full flex flex-col gap-2 pb-20">
      <Visibility setVisibility={setVisibility} visibility={visibility} />
      <TournamentName name={name} setName={setName} />
      <input
        className="bg-transparent outline-none px-2"
        placeholder="Live stream link"
        value={streamLink}
        onChange={(e) => {
          setStreamLink(e.target.value);
        }}
      />
      <EntryFee setSelectedEntryFee={setSelectedEntryFee} />
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
      {/* TODO:: add teams */}
      <CreateButton />
    </div>
  );
};

export default TournamentDetails;
