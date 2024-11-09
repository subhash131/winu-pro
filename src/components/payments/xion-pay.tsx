import React from "react";
import XionLogo from "./xion-logo";

const XionPay = () => {
  return (
    <div className="px-4 py-1 rounded-lg bg-active h-fit flex flex-col items-center justify-center gap-2 cursor-pointer">
      <XionLogo className="h-10" />
      <p className="font-semibold">XION</p>
    </div>
  );
};

export default XionPay;
