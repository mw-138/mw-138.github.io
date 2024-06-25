"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { motion, useDragControls } from "framer-motion";
import { Maximize, Minimize, Minus, X } from "lucide-react";
import { MutableRefObject, PropsWithChildren } from "react";
import { useDesktopSimulatorContext } from "../context";
import App from "../interfaces/App";

interface DraggableWindowProps extends PropsWithChildren {
  app: App;
  dragConstraints: MutableRefObject<HTMLDivElement | null>;
  isBlurred?: boolean;
  isTransparent?: boolean;
}

export default function DraggableWindow({
  app,
  dragConstraints,
  isBlurred = false,
  isTransparent = false,
  children,
}: DraggableWindowProps) {
  const { toggleAppVisibility, toggleAppMinimized, toggleAppFullscreen } =
    useDesktopSimulatorContext();
  const dragControls = useDragControls();

  const TitleIcon = app.icon;
  const WindowSizeIcon = app.isFullscreen ? Minimize : Maximize;
  const WindowWidth = app.isFullscreen ? "100%" : "1280px";
  const WindowHeight = app.isFullscreen ? "100%" : "720px";

  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      dragListener={false}
      dragElastic={false}
      dragMomentum={false}
      dragControls={dragControls}
      className={cn(
        "absolute left-0 top-0 flex flex-col overflow-hidden rounded-lg border border-muted bg-background text-foreground shadow-2xl",
        {
          "backdrop-blur-lg": isBlurred,
          "bg-background/80": isTransparent,
        },
      )}
      style={{
        width: WindowWidth,
        height: WindowHeight,
      }}
    >
      <div
        className={cn(
          "flex h-10 items-center justify-between border-b border-muted bg-muted",
          {
            "backdrop-blur-lg": isBlurred,
            "bg-muted/80": isTransparent,
          },
        )}
        onPointerDown={(e) => {
          if (app.isFullscreen) return;
          dragControls.start(e);
        }}
      >
        <div className="flex gap-2 pl-2">
          <TitleIcon />
          <span>{app.title}</span>
        </div>
        <div className="flex gap-2 pr-2">
          <Minus onClick={() => toggleAppMinimized(app.id, !app.isMinimized)} />
          {/* <WindowSizeIcon
            onClick={() => toggleAppFullscreen(app.id, !app.isFullscreen)}
          /> */}
          <X onClick={() => toggleAppVisibility(app.id, false)} />
        </div>
      </div>
      <ScrollArea className="flex-1 select-all">{children}</ScrollArea>
    </motion.div>
  );
}
