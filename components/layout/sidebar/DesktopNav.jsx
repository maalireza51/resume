import SideItem from "./SideItem";
import {
  HiOutlineUser,
  HiOutlineClipboardDocumentList,
  HiOutlineRectangleGroup,
  HiOutlineNewspaper,
  HiOutlineEnvelope,
  HiOutlineHome,
} from "react-icons/hi2";
import { motion } from "framer-motion";
import ModeSwitcher from "../../skin/bgModeSwitcher/ModeSwitcher";

const boxAnimation = {
  key: "sidebar",
  initial: { x: "50%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, delay: 0.5 },
};

const DesktopNav = () => {
  return (
    <motion.div
      {...boxAnimation}
      className={`relative px-1 py-4 lg:rounded-lg bg-skin drop-shadow-lg hidden md:block`}
    >
      <ul className="flex lg:block text-xs sm:gap-5 justify-center">
        <div className="flex absolute top-4 -left-[0] z-50 p-4 w-22 shadow-xl dark:shadow-neutral-900 bg-white rounded-r-lg dark:bg-neutral-800 lg:hidden">
          <ModeSwitcher />
        </div>
        <SideItem title={"/"} icon={HiOutlineHome} />
        <SideItem title={"about"} icon={HiOutlineUser} />
        <SideItem title={"resume"} icon={HiOutlineClipboardDocumentList} />
        <SideItem title={"portfolio"} icon={HiOutlineRectangleGroup} />
        <SideItem title={"blog"} icon={HiOutlineNewspaper} />
        <SideItem title={"contact"} icon={HiOutlineEnvelope} />
      </ul>
    </motion.div>
  );
};

export default DesktopNav;
