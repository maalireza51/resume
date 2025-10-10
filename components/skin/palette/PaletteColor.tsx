'use client'
import { useContext } from "react";
import { uiContext } from "../../../context/context";

interface PaletteColorProps {
  color: string;
}

const PaletteColor = ({ color }: PaletteColorProps) => {
  const {skin} = useContext(uiContext)

  return (
    <span
      className={`mx-1 inline-block rounded-full w-6 h-6 ${color} border border-white cursor-pointer`}
      onClick={()=>skin(color)}
    ></span>
  );
};

export default PaletteColor;
