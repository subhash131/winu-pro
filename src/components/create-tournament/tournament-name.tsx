import React from "react";

type TournamentNameProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const TournamentName = ({ name, setName }: TournamentNameProps) => {
  return (
    <input
      className="text-5xl bg-transparent outline-none font-semibold"
      placeholder="Tournament Name"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
};

export default TournamentName;
