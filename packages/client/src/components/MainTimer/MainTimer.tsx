import React, { useEffect, useState } from "react";
import { getTotalTime } from "../../api/timer-api";
import { secondsToTime } from "../../utils/time-utils";
import TimerButton from "../TimerButton";

export default function MainTimer() {
  const [totalTime, setTotalTime] = useState({ loaded: false, time: 0 });

  const fetchTotalTime = async () => {
    try {
      setTotalTime((prevState) => ({ ...prevState, loaded: false }));
      const {
        data: { data },
      }: { data: { data: { total: number; totalLogs: number } } } =
        await getTotalTime();
      setTotalTime({ loaded: true, time: Number(data.total) });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTotalTime();
  }, []);
  return (
    <div className="flex flex-col gap-y-8 mx-auto">
      <p className="text-6xl">{secondsToTime(totalTime.time)}</p>
      <div className="">
        <TimerButton setTotalTime={setTotalTime} />
      </div>
    </div>
  );
}
