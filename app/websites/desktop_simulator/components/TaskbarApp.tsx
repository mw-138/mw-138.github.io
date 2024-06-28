"use client";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import React from "react";
import { Button } from "@/components/ui/button";
import { useDesktopSimulatorContext } from "../context";
import App from "../interfaces/App";

interface TaskbarAppProps {
  app: App;
}

export default function TaskbarApp({ app }: TaskbarAppProps) {
  const {
    toggleAppVisibility,
    toggleAppMinimized,
    activeApp,
    pinnedApps,
    togglePinnedApp,
  } = useDesktopSimulatorContext();
  const isPinned = pinnedApps.some((x) => app.id === x);
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Button
          variant="ghost"
          onClick={() => {
            if (!app.isOpen) {
              toggleAppVisibility(app.id, true);
            } else {
              toggleAppMinimized(app.id, !app.isMinimized);
            }
          }}
          className={cn("rounded-none hover:bg-background/20", {
            "border-b-2 border-muted-foreground": app.isOpen || app.isMinimized,
            "bg-muted-foreground/10": app.id === activeApp,
          })}
        >
          <app.icon />
        </Button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => toggleAppVisibility(app.id, false)}>
          Close
        </ContextMenuItem>
        <ContextMenuItem onClick={() => togglePinnedApp(app.id, !isPinned)}>
          {isPinned ? "Unpin from taskbar" : "Pin to taskbar"}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
