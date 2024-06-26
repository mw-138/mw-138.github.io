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
  isScrollable?: boolean;
}

export default function DraggableWindow({
  app,
  dragConstraints,
  isBlurred = false,
  isTransparent = false,
  isScrollable = true,
  children,
}: DraggableWindowProps) {
  const {
    toggleAppVisibility,
    toggleAppMinimized,
    toggleAppFullscreen,
    activeApp,
    setActiveApp,
  } = useDesktopSimulatorContext();
  const dragControls = useDragControls();

  const TitleIcon = app.icon;
  const WindowSizeIcon = app.isFullscreen ? Minimize : Maximize;

  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      dragListener={false}
      dragElastic={false}
      dragMomentum={false}
      dragControls={dragControls}
      className={cn(
        "absolute left-0 top-0 flex h-[720px] w-[1280px] flex-col overflow-hidden rounded-lg border border-muted bg-background text-foreground shadow-md shadow-black/50",
        {
          "backdrop-blur-lg": isBlurred,
          "bg-background/80": isTransparent,
          "z-50": app.id === activeApp,
          hidden: app.isMinimized || !app.isOpen,
          "h-full w-full": app.isFullscreen,
        },
      )}
      onPointerDown={() => setActiveApp(app.id)}
    >
      <div
        className="relative flex h-10 items-center justify-between border-b border-muted-foreground/20 bg-muted"
        onPointerDown={(e) => {
          dragControls.start(e);
        }}
      >
        <div className="flex gap-2 pl-2">
          <TitleIcon />
          <span>{app.title}</span>
        </div>
        <div className="flex gap-2 pr-2">
          <Minus
            className="rounded-full p-1 hover:bg-background"
            onClick={() => toggleAppMinimized(app.id, !app.isMinimized)}
          />
          <WindowSizeIcon
            className="rounded-full p-1 hover:bg-background"
            onClick={() => toggleAppFullscreen(app.id, !app.isFullscreen)}
          />
          <X
            className="rounded-full p-1 hover:bg-background"
            onClick={() => toggleAppVisibility(app.id, false)}
          />
        </div>
      </div>
      {isScrollable ? (
        <ScrollArea className="relative flex flex-1 select-text overflow-hidden">
          {children}
        </ScrollArea>
      ) : (
        <div className="relative flex flex-1 select-text overflow-hidden">
          {children}
        </div>
      )}
    </motion.div>
  );
}
