"use client";
import React, { useCallback, useEffect, useState } from "react";
import DepositAmount from "./deposit-amount";
import AddMoney from "./add-money";
import RechargeButton from "./recharge-button";
import Payments from "../payments";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const Recharge = () => {
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [showRechargeModal, setShowRechargeModal] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.replace(
      pathname +
        "?" +
        createQueryString("recharge-modal", showRechargeModal.toString())
    );
  }, [showRechargeModal]);

  useEffect(() => {
    setTimeout(() => {
      router.replace(
        pathname +
          "?" +
          createQueryString(
            "recharge",
            depositAmount ? depositAmount.toString() : "0"
          )
      );
    }, 10);
  }, [depositAmount]);
  return (
    <div className="w-full min-h-screen flex pt-32 justify-center">
      <div className="w-[65%] flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Deposit</h3>
        <div className="size-full flex gap-10">
          <div className="w-[35rem] shrink-0 h-fit border border-active bg-foreground rounded-lg p-4 flex flex-col gap-4 relative">
            <div className="flex flex-col gap-2 w-fit">
              <p className="text-sm"> Deposit Amount</p>
              <DepositAmount
                setValue={setDepositAmount}
                value={depositAmount}
              />
            </div>
            <AddMoney setValue={setDepositAmount} />
            <RechargeButton setShowRechargeModal={setShowRechargeModal} />
          </div>
          <div className="w-full h-60 border border-dashed border-active rounded-lg"></div>
        </div>
      </div>
      {searchParams.get("recharge-modal") === "true" && (
        <Payments setShowRechargeModal={setShowRechargeModal} />
      )}
    </div>
  );
};

export default Recharge;
