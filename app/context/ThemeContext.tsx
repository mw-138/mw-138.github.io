"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

const DefaultTheme: string = "custom";

type ThemeContextValue = {
  theme: string;
  changeTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: DefaultTheme,
  changeTheme: (theme: string) => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(DefaultTheme);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || DefaultTheme;
      setTheme(storedTheme);
      setIsMounted(true);
    }
  }, []);

  const changeTheme = (theme: string) => {
    setTheme(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  };

  return isMounted ? (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  ) : (
    <div className="flex h-screen items-center justify-center gap-4 bg-base-100 text-3xl font-bold uppercase">
      <span className="loading loading-infinity loading-lg text-base-content" />
    </div>
  );
};
