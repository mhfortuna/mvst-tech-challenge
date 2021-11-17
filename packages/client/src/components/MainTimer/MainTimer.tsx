import React from "react";
import TimerButton from "../TimerButton";

export default function MainTimer() {
  return (
    <div className="flex flex-col gap-y-4 mx-auto">
      <p className="text-6xl">00:00:00</p>
      <div className="">
        <TimerButton />
      </div>
    </div>
  );
}
