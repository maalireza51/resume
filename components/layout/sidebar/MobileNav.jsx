import { motion } from "framer-motion";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineRectangleGroup,
  HiOutlineUser,
  HiXMark,
} from "react-icons/hi2";
import SideItem from "./SideItem";
const MobileNav = ({ handler }) => {
  return (
    <motion.div
      className="fixed top-0 w-full bottom-0 bg-skin z-50"
      key={"navigationBar"}
      initial={{ x: "-30%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-30%", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute right-0 top-0 p-4" onClick={handler}>
        <HiXMark className="text-white w-6 h-6" />
      </div>
      <ul className="mt-20 overflow-auto">
        <SideItem title={"/"} icon={HiOutlineHome} clickHandler={handler} />
        <SideItem title={"about"} icon={HiOutlineUser} clickHandler={handler} />
        <SideItem
          title={"resume"}
          icon={HiOutlineClipboardDocumentList}
          clickHandler={handler}
        />
        <SideItem
          title={"portfolio"}
          icon={HiOutlineRectangleGroup}
          clickHandler={handler}
        />
        <SideItem
          title={"blog"}
          icon={HiOutlineNewspaper}
          clickHandler={handler}
        />
        <SideItem
          title={"contact"}
          icon={HiOutlineEnvelope}
          clickHandler={handler}
        />
      </ul>
    </motion.div>
  );
};

export default MobileNav;
