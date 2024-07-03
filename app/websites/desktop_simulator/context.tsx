"use client";

import { Folder, Globe, Music, Settings, Store, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import AppStore from "./components/apps/AppStore";
import FileExplorerApp from "./components/apps/FileExplorerApp";
import InternetApp from "./components/apps/InternetApp";
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
  pinnedApps: string[];
  setPinnedApps: Dispatch<SetStateAction<string[]>>;
  togglePinnedApp: (id: string, pinned: boolean) => void;
  taskbarApps: App[];
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
    pinnedApps: [],
    setPinnedApps: () => {},
    togglePinnedApp: () => {},
    taskbarApps: [],
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
      isBlurred: true,
    },
    {
      id: "app_store",
      title: "App Store",
      icon: Store,
      content: <AppStore />,
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
      isWindowScrollable: false,
      isBlurred: false,
    },
    {
      id: "internet",
      title: "Internet",
      icon: Globe,
      content: <InternetApp />,
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
      isWindowScrollable: false,
      isBlurred: false,
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
      isBlurred: true,
    },
    {
      id: "music_player",
      title: "Music Player",
      icon: Music,
      content: <></>,
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
      isWindowScrollable: false,
      isBlurred: true,
    },
    {
      id: "file_explorer",
      title: "File Explorer",
      icon: Folder,
      content: <FileExplorerApp />,
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
      isWindowScrollable: false,
      isBlurred: true,
    },
  ]);
  const openedApps = apps.filter((app) => app.isOpen);
  const openedAppWindows = apps.filter((app) => app.isOpen || app.isMinimized);
  const [activeApp, setActiveApp] = useState<string>("");
  const [pinnedApps, setPinnedApps] = useState<string[]>([
    "app_store",
    "file_explorer",
    "internet",
  ]);
  const taskbarApps = apps.filter(
    (app) => pinnedApps.includes(app.id) || app.isOpen || app.isMinimized,
  );

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

  function togglePinnedApp(id: string, pinned: boolean): void {
    if (pinned) {
      setPinnedApps((prev) => [...prev, id]);
    } else {
      setPinnedApps((prev) => prev.filter((app) => app !== id));
    }
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
        pinnedApps,
        setPinnedApps,
        togglePinnedApp,
        taskbarApps,
      }}
    >
      {children}
    </DesktopSimulatorContext.Provider>
  );
}

export function useDesktopSimulatorContext() {
  return useContext(DesktopSimulatorContext);
}
