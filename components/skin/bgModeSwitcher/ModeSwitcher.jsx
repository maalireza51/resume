import { motion } from "framer-motion";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useContext, useEffect, useState } from "react";
import { uiContext } from "../../../context/context";

const ModeSwitcher = () => {
  const { bone, boneTheme } = useContext(uiContext);
  const [darkMode, setDarkMode] = useState({ right: 0 });
  useEffect(() => {
    !boneTheme ? setDarkMode({ right: 0 }) : setDarkMode();
  }, [boneTheme]);
  return (
    <>
      <button
        className="relative lg:absolute top-0 left-0 lg:m-3 flex border border-gray-300 rounded-full bg-transparent overflow-hidden"
        onClick={bone}
      >
        <motion.span
          className="absolute p-3 rounded-full bg-skin"
          animate={darkMode}
        ></motion.span>
        <span className="p-1 z-10">
          <HiOutlineMoon className="dark:text-white" />
        </span>
        <span className="p-1 z-10">
          <HiOutlineSun className="text-white" />
        </span>
      </button>
    </>
  );
};

export default ModeSwitcher;
