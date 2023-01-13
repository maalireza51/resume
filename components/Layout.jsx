import { motion } from "framer-motion";
import Content from "./Content";
import Sidebar from "./Sidebar";
import style from "../styles/backgroundAnime.module.css";

const boxAnimation = {
  key: "main",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};
const backgroundAnimation = {
  key: "anime",
  initial: { y: "100%", rotate: "45deg", opacity: 0 },
  animate: { x: "5%", y: "-100px", opacity: 1 },
  transition: { duration: 1, delay: 0.8, ease: "linear" },
};
const colorPalette = {
  key: "color",
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: "linear" },
};
const settingsIcon = {
  key: "settingsIcon",
  initial: { rotate: 0 },
  animate: { rotate: "360deg" },
  transition: { duration: 3, ease: "linear", repeat:Infinity },
};

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-50 theme-lightBlue">
      <motion.span
        {...backgroundAnimation}
        className={`${style.backgroundAnime} bg-skin`}
      ></motion.span>
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col md:flex-row flex-1 md:p-14">
          <aside className="flex items-center">
            <Sidebar />
          </aside>
          <motion.main
            {...boxAnimation}
            className="flex-col md:flex-row flex-1 min-h-full md:m-3 bg-white border border-inherit shadow-2xl rounded-lg"
          >
            <Content>{children}</Content>
          </motion.main>
        </div>
      </div>
      <motion.span
        {...colorPalette}
        className="fixed top-1 right-0 z-50 p-3 bg-white rounded-l-lg cursor-pointer"
      >
        <motion.svg
        {...settingsIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </motion.svg>
      </motion.span>
    </div>
  );
};

export default Layout;
