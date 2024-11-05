import React from "react";

const NewTournament = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col py-8 px-24 gap-4">
      <h2 className="text-xl font-semibold">Host a Tournament</h2>
      <div className="size-full flex">
        <div className="size-96 bg-foreground shrink-0 rounded-xl border border-active"></div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default NewTournament;
