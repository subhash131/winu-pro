"use client";
import React from "react";

const RechargeButton = ({
  setShowRechargeModal,
}: {
  setShowRechargeModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className="w-full py-2 bg-white text-black rounded-lg font-semibold"
      onClick={() => {
        setShowRechargeModal((prev) => !prev);
      }}
    >
      Recharge
    </button>
  );
};

export default RechargeButton;
