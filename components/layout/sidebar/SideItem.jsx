import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { uiContext } from "../../../context/context";

const SideItem = ({ title, icon: Icon, clickHandler }) => {
  const router = useRouter();
  const { setPageChange } = useContext(uiContext);

  return (
    <li onClick={clickHandler}>
      <Link
        href={`/${title === "/" ? "" : title}`}
        className={`flex md:flex-col gap-5 md:gap-0 mb-2 md:mb-1
        mx-10 md:mx-0 items-center p-2 text-base font-normal
         rounded-lg transition duration-300 hover:bg-white hover:text-skin ${
           router.pathname == `/${title === "/" ? "" : title}`
             ? "bg-white text-skin"
             : "text-white "
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
