import React from "react";
import { Tournament } from "../../types";

const CreateButton = ({
  description,
  endDate,
  entryFee,
  name,
  startDate,
  streamLink,
  visibility,
}: Tournament) => {
  return (
    <button className="bg-white px-6 py-2 rounded-lg text-black font font-semibold mt-10 active:scale-95 transition-transform">
      Create
    </button>
  );
};

export default CreateButton;
