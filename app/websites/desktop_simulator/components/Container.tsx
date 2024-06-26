"use client";

import { PropsWithChildren } from "react";
import { useDesktopSimulatorContext } from "../context";

export default function Container({ children }: PropsWithChildren) {
  const { currentWallpaper } = useDesktopSimulatorContext();
  return (
    <>
      <main
        className="hidden h-screen select-none flex-col overflow-hidden bg-cover bg-center lg:flex"
        style={{ backgroundImage: `url(${currentWallpaper})` }}
      >
        {children}
      </main>
      <main className="flex h-screen items-center justify-center lg:hidden">
        Screen size not supported.
      </main>
    </>
  );
}
