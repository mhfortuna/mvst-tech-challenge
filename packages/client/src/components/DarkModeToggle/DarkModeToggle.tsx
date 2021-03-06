import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}): JSX.Element {
  const handleDarkModeToggle = (): void => {
    setIsDark(!isDark);
  };
  return (
    <>
      <div className="flex flex-row align-middle gap-x-2 mt-0 lg:-mt-12 dark:text-white transition-none">
        <FaMoon size="16px" className="my-auto" />
        <input
          type="checkbox"
          name="toggle"
          className="hidden"
          checked={isDark}
          onChange={() => {
            setIsDark(!isDark);
          }}
        />
        <label
          className={
            "relative w-10 p-0.5 flex select-none cursor-pointer bg-gray dark:bg-gray3 rounded-3xl" +
            (isDark ? " justify-start" : " justify-end")
          }
          htmlFor="toggle"
          onClick={handleDarkModeToggle}
          data-testid="dark-mode-toggle"
        >
          <motion.span
            className="h-5 w-5 z-10 rounded-full bg-white"
            layout
            transition={{
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
          />
        </label>
        <FaSun size="16px" className="my-auto" />
      </div>
    </>
  );
}
