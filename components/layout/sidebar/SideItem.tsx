'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { uiContext } from "../../../context/context";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface SideItemProps {
  title: string;
  icon: IconType;
  clickHandler?: MouseEventHandler<HTMLLIElement>;
}

const SideItem = ({ title, icon: Icon, clickHandler }: SideItemProps) => {
  const router = useRouter();
  const pathname = usePathname()
  const { setPageChange } = useContext(uiContext);

  return (
    <li onClick={clickHandler}>
      <Link
        href={`/${title === "/" ? "" : title}`}
        className={`flex md:flex-col md:justify-center p-2 md:p-1 gap-5 md:gap-0 mb-2 md:mb-1
        mx-10 md:mx-0 items-center text-base font-normal
         rounded-lg transition duration-300 hover:bg-white hover:text-skin md:w-20 md:h-20 ${
           pathname == `/${title === "/" ? "" : title}`
             ? "bg-white text-skin"
             : "text-white"
         }  `}
        onClick={() => setPageChange(true)}
      >
        <Icon className="w-6 h-6" />

        <span className="text-xs capitalize">
          {title === "/" ? "home" : title}
        </span>
      </Link>
    </li>
  );
};

export default SideItem;
