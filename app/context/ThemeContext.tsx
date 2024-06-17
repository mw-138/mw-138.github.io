"use client";

import useLocalStorageState from "@/utils/useLocalStorageState";
import { createContext, ReactNode } from "react";

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
  const [theme, changeTheme] = useLocalStorageState<string>(
    "theme",
    DefaultTheme,
  );
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
