import React from "react";

const Toggle = () => {
  return (
    <div className="w-full h-10 font-semibold gap-2 flex items-center">
      <button className="bg-active rounded-lg px-2 py-1">My Clan</button>
      <button className="rounded-lg px-2 py-1">Search Clan</button>
      <button className="rounded-lg px-2 py-1">Top Clans</button>
    </div>
  );
};

export default Toggle;
