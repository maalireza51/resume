import { motion } from "framer-motion";
import { useContext } from "react";
import { BounceLoader } from "react-spinners";
import { uiContext } from "../../context/context";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import BgLayer from "../skin/bgLayer/BgLayer";
import Palette from "../skin/palette/Palette";
import Printable from "./printable/Printable";

const boxAnimation = {
  key: "main",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

const Layout = ({ children }) => {
  const { skinTheme, boneTheme, loader } = useContext(uiContext);

  if (loader) {
    return (
      <div className={boneTheme ? "dark" : "light"}>
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white dark:bg-neutral-700">
          <BounceLoader color="rgba(200, 200, 200, 1)" />
        </div>
      </div>
    );
  }

  return (
    <div className={`${skinTheme} ${boneTheme ? "dark" : "light"}`}>
      <div className="print:hidden lg:bg-slate-50 dark:bg-neutral-800 lg:dark:bg-neutral-600">
        <BgLayer />

        <div className="min-h-screen flex flex-col">
          <div className="h-screen flex flex-col lg:flex-row flex-1 lg:px-14 lg:items-center overflow-hidden">
            <Sidebar className="z-10" />
            <motion.main
              {...boxAnimation}
              className="z-10 h-[80vh] flex-col lg:flex-row flex-1 lg:mx-3 lg:border border-inherit md:shadow-lg lg:dark:shadow-neutral-900 lg:rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-900"
            >
              <Content>{children}</Content>
            </motion.main>
          </div>
        </div>

        <Palette />
      </div>
      <div className="hidden print:block dark:bg-neutral-700 dark:text-white">
        <Printable />
      </div>
    </div>
  );
};

export default Layout;
