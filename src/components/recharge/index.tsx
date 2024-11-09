"use client";
import React, { useState } from "react";
import DepositAmount from "./deposit-amount";
import AddMoney from "./add-money";
import RechargeButton from "./recharge-button";
import Payments from "../payments";

const Recharge = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  return (
    <div className="w-full min-h-screen flex pt-32 justify-center">
      <div className="w-[65%] flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Deposit</h3>
        <div className="size-full flex gap-10">
          <div className="w-[35rem] shrink-0 h-fit border border-active bg-foreground rounded-lg p-4 flex flex-col gap-4 relative">
            <Payments />
            <div className="flex flex-col gap-2 w-fit">
              <p className="text-sm"> Deposit Amount</p>
              <DepositAmount
                setValue={setDepositAmount}
                value={depositAmount}
              />
            </div>
            <AddMoney setValue={setDepositAmount} />
            <RechargeButton />
          </div>
          <div className="w-full h-60 border border-dashed border-active rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
