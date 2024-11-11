"use client";
import { RootState } from "@/state-manager/store";
import { Check } from "lucide-react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setEntryFee as setSelectedEntryFee } from "@/state-manager/features/tournament-form";
import { toast } from "sonner";

const EntryFee = () => {
  const dispatch = useDispatch();

  const [entryFee, setEntryFee] = useState(fee);
  const feeRef = useRef<HTMLInputElement>(null);
  const handleEntryFee = (e: React.MouseEvent<HTMLDivElement>) => {
    const type = (e.target as HTMLDivElement).getAttribute("data-type");
    if (type === "ADD") {
      const customFee = Number(feeRef.current?.value);
      if (!customFee) {
        toast.error("Please enter valid fee");
        return;
      }
      const feeExist = entryFee.find((fee) => fee.value === customFee);
      if (feeExist) {
        return;
      }
      setEntryFee((prev) => {
        return [...prev, { selected: false, value: Number(customFee) }];
      });
    }
    const fee = (e.target as HTMLDivElement).getAttribute("data-fee");
    setEntryFee((prev) => {
      if (!fee) return prev;
      const temp = prev.map(({ value }) => {
        if (value === Number(fee)) {
          dispatch(setSelectedEntryFee(value));

          return { value, selected: true };
        } else {
          return { value, selected: false };
        }
      });
      return temp;
    });
    (feeRef.current as HTMLInputElement).value = "";
  };
  return (
    <div className="w-full px-2 flex flex-col gap-1" onClick={handleEntryFee}>
      <p className="text-gray-200">Entry Fee</p>
      <div className="flex gap-2">
        {entryFee.map(({ selected, value }, idx) => {
          return (
            <button
              className={`${
                selected ? "pl-4 pr-2" : "px-4"
              } py-0.5 text-black font-semibold rounded-lg bg-white w-fit flex items-center gap-1 `}
              key={`fee-${value}-${idx}`}
              data-fee={value}
            >
              {value}
              {selected && <Check />}
            </button>
          );
        })}
      </div>
      <div className="w-full flex gap-2">
        <input
          className="px-2 py-0.5 border border-white rounded-lg outline-none text-black w-36 no-spinner font-semibold"
          placeholder="custom fee"
          type="number"
          ref={feeRef}
        />
        <button
          className="px-4 py-0.5 rounded-lg bg-white text-black font-semibold active:scale-95 transition-all"
          data-type="ADD"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default EntryFee;

type Fee = {
  value: number;
  selected: boolean;
};

export const fee: Fee[] = [
  {
    value: 10,
    selected: true,
  },
  {
    value: 100,
    selected: false,
  },
  {
    value: 1000,
    selected: false,
  },
];
