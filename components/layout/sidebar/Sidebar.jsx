import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import {AnimatePresence} from 'framer-motion'
import DesktopNav from "./DesktopNav";
import ModeSwitcher from "../../skin/bgModeSwitcher/ModeSwitcher";
import MobileNav from "./MobileNav";

const Sidebar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <AnimatePresence>
        {toggleNav ? <MobileNav handler={handleToggle} /> : ""}
      </AnimatePresence>
      <nav className="lg:flex items-center">
        <div className="flex p-6 md:hidden">
          <span className="md:hidden" onClick={handleToggle}>
            <HiBars3BottomLeft className="w-9 h-9 dark:text-white" />
          </span>
          <span className="relative lg:hidden mt-1.5 ml-5">
            <ModeSwitcher />
          </span>
        </div>
        <DesktopNav />
      </nav>
    </>
  );
};

export default Sidebar;
