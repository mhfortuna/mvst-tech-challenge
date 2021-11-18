import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../Header";

export default function Layout({
  children,
}: {
  children: JSX.Element | string;
}): JSX.Element {
  const [isDark, setIsDark] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className={
          "flex flex-col h-screen w-screen overflow-hidden transition-colors duration-300" +
          (isDark ? " dark bg-gray text-white" : " bg-white text-gray")
        }
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main className="h-full w-full relative my-4">{children}</main>
      </motion.div>
    </AnimatePresence>
  );
}
