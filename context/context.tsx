"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

export const uiContext = createContext({
  skin: (color: string) => {},
  bone: () => {},
  setPageChange: (value: boolean) => {},
  skinTheme: "theme-purple",
  boneTheme: false,
  loader: true,
  pageChange: false,
});

interface SkinFunction {
  (color: string): void;
}

export function UiProvider({ children }: { children: ReactNode }) {
  const [skinTheme, setSkinTheme] = useState("theme-purple");
  const [boneTheme, setBoneTheme] = useState(false);
  const [loader, setLoader] = useState(true);
  const [pageChange, setPageChange] = useState(false);

  const skin: SkinFunction = (color) => {
    localStorage.setItem("Palette", `theme-${color.split("-")[1]}`);
    setSkinTheme(localStorage.getItem("Palette") || "theme-purple");
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
      : setSkinTheme(localStorage.getItem("Palette") ?? "theme-purple");
    setLoader(false);
  }, []);

  return (
    <uiContext.Provider
      value={{
        skin,
        bone,
        setPageChange: setPageChange as (value: boolean) => void,
        skinTheme,
        boneTheme,
        loader,
        pageChange,
      }}
    >
      {children}
    </uiContext.Provider>
  );
}
