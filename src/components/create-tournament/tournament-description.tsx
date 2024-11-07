import React from "react";

type TournamentDescriptionProps = {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

const TournamentDescription = ({
  description,
  setDescription,
}: TournamentDescriptionProps) => {
  return (
    <textarea
      className="text-sm bg-transparent outline-none border rounded-lg border-active p-4 resize-none h-32"
      placeholder="Description"
      value={description}
      onChange={(e) => {
        setDescription(e.target.value);
      }}
    />
  );
};

export default TournamentDescription;
