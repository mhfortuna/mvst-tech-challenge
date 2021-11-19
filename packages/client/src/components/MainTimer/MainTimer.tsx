import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getTotalTime } from "../../api/timer-api";
import { secondsToTime } from "../../utils/time-utils";
import TimerButton from "../TimerButton";

export default function MainTimer(): JSX.Element {
  const [totalTime, setTotalTime] = useState({ loaded: false, time: 0 });

  const fetchTotalTime = async () => {
    try {
      setTotalTime((prevState) => ({ ...prevState, loaded: false }));
      const {
        data: { data },
      }: { data: { data: { time: number; totalLogs: number } } } =
        await getTotalTime();
      setTotalTime({ loaded: true, time: Number(data.time) });
    } catch (error) {
      let errorMessage = "";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }
      toast(errorMessage, {
        type: "error",
      });
    }
  };

  useEffect(() => {
    fetchTotalTime();
  }, []);
  return (
    <div className="flex flex-col gap-y-8 mx-auto">
      <div className="text-6xl text-center" data-testid="main-timer">
        {totalTime.loaded ? (
          secondsToTime(totalTime.time)
        ) : (
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray dark:border-white mx-auto" />
        )}
      </div>
      <div className="">
        <TimerButton setTotalTime={setTotalTime} />
      </div>
    </div>
  );
}
