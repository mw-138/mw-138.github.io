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
import { LayoutTemplate } from "lucide-react";
import { useEffect, useState } from "react";
import { useDesktopSimulatorContext } from "../context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Taskbar() {
  const { openedApps, toggleAppMinimized, toggleAppVisibility } =
    useDesktopSimulatorContext();
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
    <div className="flex h-10 items-center justify-between border-t border-muted bg-background/50 backdrop-blur-md">
      <div className="flex">
        <Popover>
          <PopoverTrigger className={buttonVariants({ variant: "ghost" })}>
            <LayoutTemplate />
          </PopoverTrigger>
          <PopoverContent align="end" className="h-[700px] w-[500px]">
            <Card className="border-0 bg-red-500">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </PopoverContent>
        </Popover>
        {openedApps.map((app, index) => (
          <ContextMenu key={index}>
            <ContextMenuTrigger>
              <Button
                variant="ghost"
                onClick={() => toggleAppMinimized(app.id, !app.isMinimized)}
              >
                <app.icon />
              </Button>
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
      <div>
        <Popover>
          <PopoverTrigger className={buttonVariants({ variant: "ghost" })}>
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
