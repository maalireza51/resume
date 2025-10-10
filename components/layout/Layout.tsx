"use client";
import { motion } from "motion/react";
import { useContext, ReactNode } from "react";
import { uiContext } from "../../context/context";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import BgLayer from "../skin/bgLayer/BgLayer";
import Palette from "../skin/palette/Palette";
const boxAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { skinTheme, boneTheme } = useContext(uiContext) as {
    skinTheme: string;
    boneTheme: boolean;
  };
  return (
    <div className={`${skinTheme} ${boneTheme ? "dark" : "light"}`}>
      <div className="lg:bg-slate-50 dark:bg-neutral-800 lg:dark:bg-neutral-600">
        <BgLayer />

        <div className="min-h-screen flex flex-col">
          <div className="h-screen flex flex-col lg:flex-row flex-1 lg:px-8 lg:items-center overflow-hidden">
            <Sidebar />
            <motion.main
              {...boxAnimation}
              className="z-10 h-[80vh] flex-col lg:flex-row flex-1 lg:mx-3 md:shadow-lg lg:dark:shadow-neutral-900 lg:rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-900"
            >
              <Content>{children}</Content>
            </motion.main>
          </div>
        </div>

        <Palette />
      </div>
    </div>
  );
};

export default Layout;
