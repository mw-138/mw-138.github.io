"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Power } from "lucide-react";
import { useEffect, useState } from "react";
import { useDesktopSimulatorContext } from "../context";
import TaskbarApp from "./TaskbarApp";

export default function Taskbar() {
  const {
    apps,
    openedApps,
    toggleAppMinimized,
    toggleAppVisibility,
    activeApp,
    pinnedApps,
    taskbarApps,
  } = useDesktopSimulatorContext();
  const [time, setTime] = useState<Date | undefined>(new Date());
  const timeString = time
    ? time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-10 items-center justify-between border-t border-muted bg-background/20 backdrop-blur-md">
      <div className="flex">
        <Popover>
          <PopoverTrigger
            className={cn(buttonVariants({ variant: "ghost" }), "rounded-none")}
          >
            <Power />
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="h-[700px] w-[500px] overflow-hidden bg-background/50 backdrop-blur-md"
          >
            <aside className="absolute left-0 top-0 flex h-full w-48 flex-col border-r border-muted bg-background">
              <ScrollArea>
                <div className="flex flex-col gap-2 p-2">
                  <h1>Start</h1>
                  <Separator />
                  <Button
                    variant="outline"
                    className="flex justify-start gap-2"
                  >
                    Button
                  </Button>
                </div>
              </ScrollArea>
            </aside>
            <div className="pl-48">
              <ScrollArea>
                {Array.from({ length: 100 }, (_, index) => (
                  <p key={index}>Test</p>
                ))}
              </ScrollArea>
            </div>
          </PopoverContent>
        </Popover>
        {taskbarApps.map((app, index) => (
          <TaskbarApp key={index} app={app} />
        ))}
      </div>
      <div>
        <Popover>
          <PopoverTrigger
            className={cn(buttonVariants({ variant: "ghost" }), "rounded-none")}
          >
            {timeString}
          </PopoverTrigger>
          <PopoverContent align="end">
            <Calendar
              mode="single"
              selected={time}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
