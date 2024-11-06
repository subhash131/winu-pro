import React from "react";
import { GiFlamingTrident } from "react-icons/gi";

const ClanIcon = () => {
  return (
    <button className="rounded-full bg-foreground text-white flex items-center justify-center size-12 border border-active active:scale-95 transition-transform group">
      <div className="absolute px-2 py-0.5 text-xs left-0 group-hover:left-14 transition-all bg-active rounded-full opacity-0 group-hover:opacity-100">
        clan
      </div>
      <GiFlamingTrident size={24} />
    </button>
  );
};

export default ClanIcon;
