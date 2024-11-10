"use client";
import React from "react";

const DepositAmount = ({
  setValue,
  value,
}: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <input
      className="px-4 font-semibold py-2 bg-transparent border rounded-lg border-active no-spinner"
      type="number"
      placeholder="0"
      value={value}
      onChange={(e) => {
        const newValue = Number(e.target.value.toString().replace(/^0+/, ""));
        setValue(newValue);
      }}
    />
  );
};

export default DepositAmount;