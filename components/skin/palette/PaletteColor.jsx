import { useContext } from "react";
import { uiContext } from "../../../context/context";

const PaletteColor = ({ color }) => {
  const {skin} = useContext(uiContext)

  return (
    <span
      className={`mx-1 inline-block rounded-full w-6 h-6 ${color} border border-white cursor-pointer`}
      onClick={()=>skin(color)}
    ></span>
  );
};

export default PaletteColor;
