import ClanIcon from "@/components/clan/clan-icon";
import Navbar from "@/components/navbar";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen h-full">
      <Navbar />
      <div className="fixed bottom-8 left-8 flex flex-col gap-4">
        <ClanIcon />
        <ClanIcon />
      </div>
      {children}
    </div>
  );
};

export default ProtectedLayout;
