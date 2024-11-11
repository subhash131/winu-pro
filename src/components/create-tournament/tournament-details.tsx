"use client";
import React, { useState } from "react";
import Visibility from "./visibility";
import Schedule from "./schedule";
import TournamentName from "./tournament-name";
import TournamentDescription from "./tournament-description";
import CreateButton from "./create-button";
import EntryFee from "./entry-fee";
import { VisibilityT } from "@/types";
import TournamentImage from "./tournament-image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const TournamentDetails = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  const [name, setName] = useState<string>("");
  const [streamLink, setStreamLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [visibility, setVisibility] = useState<VisibilityT>("PUBLIC");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [selectedEntryFee, setSelectedEntryFee] = useState(10);

  if (error) {
    return <div>Failed to load! refresh the page again.</div>;
  }

  return (
    <div className="flex gap-10">
      {isPending && (
        <div className="size-full absolute flex items-center justify-center top-0 left-0">
          Loading...
        </div>
      )}
      <TournamentImage />
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
        {/* TODO:: add Matches */}
        <CreateButton
          name={name}
          streamLink={streamLink}
          description={description}
          visibility={visibility}
          startDate={startDate}
          endDate={endDate}
          entryFee={selectedEntryFee}
          host=""
          image=""
          isActive={true}
          matches={[]}
        />
      </div>
    </div>
  );
};

export default TournamentDetails;
