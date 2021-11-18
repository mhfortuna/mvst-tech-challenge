import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../Header";

export default function Layout({
  children,
}: {
  children: JSX.Element | string;
}): JSX.Element {
  const LOCAL_STORAGE_DARK_MODE_KEY = "DARK_MODE";
  const initialState = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY) || "",
  );

  const [isDark, setIsDark] = useState(
    initialState === "" ? false : initialState,
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, JSON.stringify(isDark));
  }, [isDark]);

  return (
    <AnimatePresence>
      <motion.div
        className={
          "flex flex-col h-screen w-screen overflow-hidden transition-colors duration-300 select-none" +
          (isDark ? " dark bg-gray text-white" : " bg-white text-gray")
        }
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main className="h-full w-full relative my-4">{children}</main>
      </motion.div>
    </AnimatePresence>
  );
}
