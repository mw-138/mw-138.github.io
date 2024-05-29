"use client";
import { createContext, useState, useEffect } from "react";

type ThemeContextValue = {
  theme: string;
  changeTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "mytheme",
  changeTheme: (theme: string) => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("mytheme");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "mytheme";
    setTheme(storedTheme);
  }, []);

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return isMounted ? (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  ) : (
    <div className="flex h-screen items-center justify-center gap-4 bg-black text-3xl font-bold uppercase">
      <span className="loading loading-infinity loading-lg" />
    </div>
  );
};
