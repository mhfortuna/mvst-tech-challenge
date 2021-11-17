import React from "react";
// import {IoPlayOutline, IoPauseOutline} from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";

export default function TimerButton() {
  return (
    <button
      type="button"
      className="h-10 w-52 flex flex-row justify-center align-middle gap-x-5 bg-gray dark:bg-white text-white dark:text-gray text-sm mx-auto transition-colors duration-300"
    >
      <IoPlayOutline size="18px" className="inline my-auto" />
      <span className="my-auto leading-none">0:00:00</span>
    </button>
  );
}
