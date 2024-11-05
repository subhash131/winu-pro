import Navbar from "@/components/navbar";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
