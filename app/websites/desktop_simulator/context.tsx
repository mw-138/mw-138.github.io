"use client";

import { Globe, Settings, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import SettingsApp from "./components/apps/SettingsApp";
import TerminalApp from "./components/apps/TerminalApp";
import App from "./interfaces/App";

type DesktopSimulatorContextValue = {
  darkWallpaper: string;
  setDarkWallpaper: Dispatch<SetStateAction<string>>;
  lightWallpaper: string;
  setLightWallpaper: Dispatch<SetStateAction<string>>;
  currentWallpaper: string;
  apps: App[];
  openedApps: App[];
  openedAppWindows: App[];
  activeApp: string;
  setActiveApp: Dispatch<SetStateAction<string>>;
  toggleAppVisibility: (id: string, visible: boolean) => void;
  toggleAppMinimized: (id: string, minimized: boolean) => void;
  toggleAppFullscreen: (id: string, minimized: boolean) => void;
};

export const DesktopSimulatorContext =
  createContext<DesktopSimulatorContextValue>({
    darkWallpaper: "",
    setDarkWallpaper: () => {},
    lightWallpaper: "",
    setLightWallpaper: () => {},
    currentWallpaper: "",
    apps: [],
    openedApps: [],
    openedAppWindows: [],
    activeApp: "",
    setActiveApp: () => {},
    toggleAppVisibility: () => {},
    toggleAppMinimized: () => {},
    toggleAppFullscreen: () => {},
  });

export default function DesktopSimulatorProvider({
  children,
}: PropsWithChildren) {
  const { resolvedTheme } = useTheme();
  const [darkWallpaper, setDarkWallpaper] = useState<string>(
    "https://i.redd.it/a9vjztlbnys71.png",
  );
  const [lightWallpaper, setLightWallpaper] = useState<string>(
    "https://archive.org/download/windows-xp-bliss-wallpaper/windows-xp-bliss-4k-lu-1920x1080.jpg",
  );
  const currentWallpaper =
    resolvedTheme === "dark" || resolvedTheme === undefined
      ? darkWallpaper
      : lightWallpaper;
  const [apps, setApps] = useState<App[]>([
    {
      id: "settings",
      title: "Settings",
      icon: Settings,
      content: <SettingsApp />,
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
      isWindowScrollable: true,
    },
    {
      id: "internet",
      title: "Internet",
      icon: Globe,
      content: <></>,
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
      isWindowScrollable: true,
    },
    {
      id: "terminal",
      title: "Terminal",
      icon: Terminal,
      content: <TerminalApp />,
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
      isWindowScrollable: false,
    },
  ]);
  const openedApps = apps.filter((app) => app.isOpen);
  const openedAppWindows = apps.filter((app) => app.isOpen || app.isMinimized);
  const [activeApp, setActiveApp] = useState<string>("");

  function toggleAppVisibility(id: string, visible: boolean): void {
    setApps((prevApps) =>
      prevApps.map((app) => {
        const isMinimized = !visible && app.isMinimized;
        return app.id === id ? { ...app, isOpen: visible, isMinimized } : app;
      }),
    );
    setActiveApp(visible ? id : "");
  }

  function toggleAppMinimized(id: string, minimized: boolean): void {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, isMinimized: minimized } : app,
      ),
    );
    setActiveApp(minimized ? "" : id);
  }

  function toggleAppFullscreen(id: string, fullscreen: boolean): void {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, isFullscreen: fullscreen } : app,
      ),
    );
  }

  return (
    <DesktopSimulatorContext.Provider
      value={{
        darkWallpaper,
        setDarkWallpaper,
        lightWallpaper,
        setLightWallpaper,
        currentWallpaper,
        apps,
        openedApps,
        openedAppWindows,
        activeApp,
        setActiveApp,
        toggleAppVisibility,
        toggleAppMinimized,
        toggleAppFullscreen,
      }}
    >
      {children}
    </DesktopSimulatorContext.Provider>
  );
}

export function useDesktopSimulatorContext() {
  return useContext(DesktopSimulatorContext);
}
