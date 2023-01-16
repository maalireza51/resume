import { motion } from "framer-motion";
import { useState } from "react";
import { HiSwatch } from "react-icons/hi2";
import { colors } from "./colors";
import PaletteColor from "./PaletteColor";

const Palette = () => {
  const [paletteState, setpaletteState] = useState("-410px");

  const handleChangeTheme = () => {
    paletteState === "-410px" ? setpaletteState("-10px") : setpaletteState("-410px");
  };

  const palette = colors.map((color, index) => {
    return <PaletteColor key={color} color={color} />;
  });

  return (
    <motion.span
      className="flex fixed top-4 -right-[410px] z-10 p-3 bg-white rounded-l-lg shadow-xl dark:shadow-neutral-900 dark:bg-neutral-800"
      animate={{ right: paletteState }}
      transition={{ease:"linear"}}
    >
      <motion.span animate={{ rotate: paletteState === 0 ? "-90deg" : 0 }}>
        <HiSwatch
          className="w-6 h-6 text-skin cursor-pointer mx-2.5"
          onClick={handleChangeTheme}
        />
      </motion.span>
      <div className="mx-4" onClick={handleChangeTheme}>{palette}</div>
    </motion.span>
  );
};

export default Palette;
