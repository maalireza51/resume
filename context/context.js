import { createContext, useEffect, useState } from "react";

export const uiContext = createContext();

export function UiProvider({ children }) {
  const [skinTheme, setSkinTheme] = useState("theme-purple");
  const [boneTheme, setBoneTheme] = useState(false);
  const [loader, setLoader] = useState(true);
  const [pageChange, setPageChange] = useState(false);

  const skin = (color) => {
    localStorage.setItem("Palette", `theme-${color.split("-")[1]}`);
    setSkinTheme(localStorage.getItem("Palette"));
  };

  const bone = () => {
    const mode = !boneTheme ? "dark" : "light";
    localStorage.setItem("Mode", mode);
    setBoneTheme(!boneTheme);
  };
  
  useEffect(() => {
    setLoader(true);
    localStorage.getItem("Mode") === "dark"
      ? bone()
      : localStorage.setItem("Mode", "light");
    !localStorage.getItem("Palette")
      ? localStorage.setItem("Palette", "theme-purple")
      : setSkinTheme(localStorage.getItem("Palette"));
    setLoader(false);
  }, []);

  return (
    <uiContext.Provider
      value={{ skin, bone, setPageChange, skinTheme, boneTheme, loader, pageChange }}
    >
      {children}
    </uiContext.Provider>
  );
}
