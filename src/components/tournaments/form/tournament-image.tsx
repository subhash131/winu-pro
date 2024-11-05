import Logo from "@/components/logo";
import React from "react";
import { FaImage } from "react-icons/fa";

const TournamentImage = () => {
  return (
    <div className="size-96 relative bg-foreground shrink-0 rounded-xl border border-active">
      <Logo className="size-full -rotate-12" />
      <input
        className="size-full opacity-0 absolute top-0 left-0 cursor-pointer"
        type="file"
      />
      <div className="size-12 rounded-full border border-active absolute bottom-4 right-4 pointer-events-none flex items-center justify-center text-gray-400">
        <FaImage size={22} />
      </div>
    </div>
  );
};

export default TournamentImage;
