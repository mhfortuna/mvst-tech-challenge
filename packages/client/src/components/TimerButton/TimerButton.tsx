import React, { useState, useEffect } from "react";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { addTime } from "../../api/timer-api";
import { secondsToTime } from "../../utils/time-utils";
// import { IoPlayOutline } from "react-icons/io5";

export default function TimerButton({
  setTotalTime,
}: {
  setTotalTime: React.Dispatch<
    React.SetStateAction<{
      loaded: boolean;
      time: number;
    }>
  >;
}) {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0); // time is in seconds

  const postTime = async () => {
    try {
      const { data }: { data: { message: string; total: number } } =
        await addTime(time);
      setTotalTime({ loaded: true, time: Number(data.total) });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    if (!isActive) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleClick = () => {
    if (isActive) {
      console.log(`Registered time is ${time} seconds`);
      postTime();
      setTime(0);
    }

    setIsActive(!isActive);
  };

  return (
    <button
      type="button"
      className="h-10 w-52 flex flex-row justify-center align-middle gap-x-5 bg-gray dark:bg-white text-white dark:text-gray text-sm mx-auto transition-colors duration-300"
      onClick={handleClick}
    >
      {isActive ? (
        <IoPauseOutline size="18px" className="inline my-auto" />
      ) : (
        <IoPlayOutline size="18px" className="inline my-auto" />
      )}
      <span className="my-auto leading-none">{secondsToTime(time)}</span>
    </button>
  );
}
