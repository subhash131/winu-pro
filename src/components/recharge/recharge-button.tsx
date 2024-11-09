"use client";
import React from "react";
import { toast } from "sonner";

const RechargeButton = ({
  setShowRechargeModal,
  depositAmount,
}: {
  setShowRechargeModal: React.Dispatch<React.SetStateAction<boolean>>;
  depositAmount: number;
}) => {
  return (
    <button
      className="w-full py-2 bg-white text-black rounded-lg font-semibold"
      onClick={() => {
        if (!depositAmount) {
          toast.error("Please enter valid amount");
          return;
        }
        setShowRechargeModal((prev) => !prev);
      }}
    >
      Recharge
    </button>
  );
};

export default RechargeButton;
