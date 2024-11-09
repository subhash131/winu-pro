"use client";
import React from "react";
import XionLogo from "./xion-logo";
import {
  Abstraxion,
  useAbstraxionAccount,
  useModal,
} from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";
import { useSearchParams } from "next/navigation";

const XionPay = () => {
  const {
    data: { bech32Address },
    isConnected,
    isConnecting,
  } = useAbstraxionAccount();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const [, setShow] = useModal();
  return (
    <div>
      <Button
        className="px-4 py-1 rounded-lg bg-active h-fit flex flex-col items-center justify-center gap-2 cursor-pointer"
        onClick={() => {
          params.set("xion-pay", "true");
          setShow((prev) => !prev);
        }}
      >
        <XionLogo className="h-10" />
        {isConnected ? (
          <p className="text-xs">Connected</p>
        ) : (
          <p className="font-semibold">XION</p>
        )}
      </Button>
    </div>
  );
};

export default XionPay;
