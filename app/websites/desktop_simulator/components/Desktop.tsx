"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useRef } from "react";
import { useDesktopSimulatorContext } from "../context";
import DesktopApp from "./DesktopApp";
import DraggableWindow from "./DraggableWindow";

export default function Desktop() {
  const { apps, openedAppWindows } = useDesktopSimulatorContext();
  const desktopConstraints = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative flex-1 overflow-hidden" ref={desktopConstraints}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-full w-fit max-w-full flex-col flex-wrap gap-2 p-2">
            {apps.map((app, index) => (
              <DesktopApp key={index} app={app} />
            ))}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>View</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuRadioGroup value="small_icons">
                <ContextMenuRadioItem value="large_icons">
                  Large icons
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="medium_icons">
                  Medium icons
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="small_icons">
                  Small icons
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuItem inset disabled>
                Auto arrange icons
              </ContextMenuItem>
              <ContextMenuItem inset disabled>
                Align icons to grid
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem inset>Show desktop icons</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>Sort By</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem inset disabled>
                Name
              </ContextMenuItem>
              <ContextMenuItem inset disabled>
                Size
              </ContextMenuItem>
              <ContextMenuItem inset disabled>
                Item type
              </ContextMenuItem>
              <ContextMenuItem inset disabled>
                Date modified
              </ContextMenuItem>
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
          isTransparent={app.isBlurred}
          isBlurred={app.isBlurred}
          isScrollable={app.isWindowScrollable}
        >
          {app.content}
        </DraggableWindow>
      ))}
    </div>
  );
}
