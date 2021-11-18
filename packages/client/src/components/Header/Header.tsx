import React from "react";
import DarkModeToggle from "../DarkModeToggle";
// import { Link } from "react-router-dom";
// import { APP } from "../../constants/routes";

export default function Header({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}): JSX.Element {
  return (
    <header className="flex flex-wrap place-items-center relative">
      <nav className="flex justify-between w-screen">
        <div className="px-4 xl:px-11 py-6 lg:py-11 flex w-full items-center justify-between">
          <p className="text-5xl font-bold md:font-black font-roboto md:font-bitter select-none">
            MVST<span className="hidden md:inline">.</span>
          </p>
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>
      </nav>
    </header>
  );
}
