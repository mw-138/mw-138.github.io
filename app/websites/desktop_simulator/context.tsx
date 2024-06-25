"use client";

import { Globe } from "lucide-react";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import App from "./interfaces/App";

type DesktopSimulatorContextValue = {
  backgroundUrl: string;
  setBackgroundUrl: Dispatch<SetStateAction<string>>;
  apps: App[];
  openedApps: App[];
  openedAppWindows: App[];
  toggleAppVisibility: (id: string, visible: boolean) => void;
  toggleAppMinimized: (id: string, minimized: boolean) => void;
  toggleAppFullscreen: (id: string, minimized: boolean) => void;
};

export const DesktopSimulatorContext =
  createContext<DesktopSimulatorContextValue>({
    backgroundUrl: "",
    setBackgroundUrl: () => {},
    apps: [],
    openedApps: [],
    openedAppWindows: [],
    toggleAppVisibility: () => {},
    toggleAppMinimized: () => {},
    toggleAppFullscreen: () => {},
  });

export default function DesktopSimulatorProvider({
  children,
}: PropsWithChildren) {
  const [backgroundUrl, setBackgroundUrl] = useState<string>(
    "https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/10/Windows-11-Bloom-Screensaver-Dark-scaled.jpg",
  );
  const [apps, setApps] = useState<App[]>([
    {
      id: "internet",
      title: "Internet",
      icon: Globe,
      content: <></>,
      isOpen: false,
      isMinimized: false,
      isFullscreen: false,
    },
  ]);
  const openedApps = apps.filter((app) => app.isOpen);
  const openedAppWindows = apps.filter((app) => app.isOpen && !app.isMinimized);

  function toggleAppVisibility(id: string, visible: boolean): void {
    setApps((prevApps) =>
      prevApps.map((app) => {
        const isMinimized = !visible && app.isMinimized;
        return app.id === id ? { ...app, isOpen: visible, isMinimized } : app;
      }),
    );
  }

  function toggleAppMinimized(id: string, minimized: boolean): void {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, isMinimized: minimized } : app,
      ),
    );
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
        backgroundUrl,
        setBackgroundUrl,
        apps,
        openedApps,
        openedAppWindows,
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
