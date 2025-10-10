'use client'
import { motion } from "motion/react";

const BgLayer = () => {
  return (
    <motion.span
      initial={{ y: "100%", rotate: "45deg", opacity: 0 }}
      animate={{ x: "5%", y: "-100px", opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
      className={`backgroundAnime bg-skin`}
    ></motion.span>
  );
};

export default BgLayer;
