import { motion } from "framer-motion";
import style from "../../../styles/backgroundAnime.module.css";

const BgLayer = () => {
  const backgroundAnimation = {
    key: "anime",
    initial: { y: "100%", rotate: "45deg", opacity: 0 },
    animate: { x: "5%", y: "-100px", opacity: 1 },
    transition: { duration: 0.7, delay: 0.4, ease: "linear" },
  };

  return (
    <motion.span
      {...backgroundAnimation}
      className={`${style.backgroundAnime} bg-skin`}
    ></motion.span>
  );
};

export default BgLayer;
