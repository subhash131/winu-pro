"use client";
import { DatePicker } from "@/components/ui/date-picker";
import React, { useState } from "react";

type ScheduleProps = {
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

const Schedule = ({
  setStartDate,
  startDate,
  endDate,
  setEndDate,
}: ScheduleProps) => {
  return (
    <div className="h-fit gap-2 w-fit rounded-lg bg-active flex flex-col overflow-hidden py-2 px-3">
      <div className="w-full h-full flex gap-4 items-center justify-between">
        <p>Start</p>
        <DatePicker setDate={setStartDate} date={startDate} />
      </div>
      <div className="w-full h-full flex gap-4 items-center justify-between">
        <p>End</p>
        <DatePicker setDate={setEndDate} date={endDate} />
      </div>
    </div>
  );
};

export default Schedule;
