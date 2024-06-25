"use client";

import { PropsWithChildren } from "react";
import { useDesktopSimulatorContext } from "../context";

export default function Container({ children }: PropsWithChildren) {
  const { backgroundUrl } = useDesktopSimulatorContext();
  return (
    <main
      className="flex h-screen select-none flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {children}
    </main>
  );
}
