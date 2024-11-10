import Navbar from "@/components/navbar";
import Shortcut from "@/components/ui/shortcut";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { GiFlamingTrident } from "react-icons/gi";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen h-full">
      <Navbar />
      <div className="fixed bottom-8 left-8 flex flex-col gap-4 z-50">
        <Shortcut link="#" name="Clan">
          <GiFlamingTrident size={24} />
        </Shortcut>
        <Shortcut link="/tournament/create" name="Host tournament">
          <FiPlus size={24} />
        </Shortcut>
      </div>
      {children}
    </div>
  );
};

export default ProtectedLayout;
