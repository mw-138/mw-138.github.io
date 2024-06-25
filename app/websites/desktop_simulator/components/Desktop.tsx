"use client";

import SimpleTooltip from "@/components/SimpleTooltip";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useDesktopSimulatorContext } from "../context";
import DraggableWindow from "./DraggableWindow";

export default function Desktop() {
  const { apps, openedAppWindows, toggleAppVisibility } =
    useDesktopSimulatorContext();
  const desktopConstraints = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative flex-1 overflow-hidden" ref={desktopConstraints}>
      <div className="flex h-full w-fit max-w-full flex-col flex-wrap gap-2 p-2">
        {apps.map((app, index) => (
          <SimpleTooltip key={index} message={app.title}>
            <Button
              variant="outline"
              className="h-16 w-16 bg-background/50 backdrop-blur-md"
              onClick={() => toggleAppVisibility(app.id, true)}
            >
              <app.icon />
            </Button>
          </SimpleTooltip>
        ))}
      </div>
      {openedAppWindows.map((app, index) => (
        <DraggableWindow
          key={index}
          app={app}
          dragConstraints={desktopConstraints}
          isTransparent
          isBlurred
        >
          {app.content}
        </DraggableWindow>
      ))}
    </div>
  );
}
