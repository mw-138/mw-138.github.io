"use client";

import SimpleTooltip from "@/components/SimpleTooltip";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useDesktopSimulatorContext } from "../context";
import DraggableWindow from "./DraggableWindow";
import {
  ContextMenuShortcut,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuRadioItem,
} from "@/components/ui/context-menu";

export default function Desktop() {
  const { apps, openedAppWindows, toggleAppVisibility } =
    useDesktopSimulatorContext();
  const desktopConstraints = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative flex-1 overflow-hidden" ref={desktopConstraints}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-full w-fit max-w-full flex-col flex-wrap gap-2 p-2">
            {apps.map((app, index) => (
              <ContextMenu key={index}>
                <ContextMenuTrigger>
                  <SimpleTooltip message={app.title}>
                    <Button
                      variant="outline"
                      className="h-16 w-16 bg-background/50 backdrop-blur-md"
                      onClick={() => toggleAppVisibility(app.id, true)}
                    >
                      <app.icon />
                    </Button>
                  </SimpleTooltip>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem
                    onClick={() => toggleAppVisibility(app.id, false)}
                  >
                    Close
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>View</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>Sort By</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem inset>Refresh</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem inset disabled>
            Paste
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Paste shortcut
          </ContextMenuItem>
          <ContextMenuItem inset>
            Undo Rename
            <ContextMenuShortcut>Ctrl+Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>Open in Terminal</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>New</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem inset>Folder</ContextMenuItem>
              <ContextMenuItem inset>Shortcut</ContextMenuItem>
              <ContextMenuSeparator />
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem inset>Settings</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
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
