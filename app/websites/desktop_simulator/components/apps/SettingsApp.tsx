"use client";

import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Computer, Wallpaper, Wifi } from "lucide-react";
import Image from "next/image";
import { Fragment, ReactNode, useState } from "react";
import { useDesktopSimulatorContext } from "../../context";

const Tabs: any[] = [
  {
    id: "personalisation",
    label: "Personalisation",
    icon: Wallpaper,
    content: <WallpaperTab />,
  },
  {
    id: "network",
    label: "Network",
    icon: Wifi,
    content: <NetworkTab />,
  },
  {
    id: "system",
    label: "System",
    icon: Computer,
    content: <></>,
  },
];

function WallpaperTab(): ReactNode {
  const { darkWallpaper, setDarkWallpaper, lightWallpaper, setLightWallpaper } =
    useDesktopSimulatorContext();
  const [darkWallpaperUrl, setDarkWallpaperUrl] =
    useState<string>(darkWallpaper);
  const [lightWallpaperUrl, setLightWallpaperUrl] =
    useState<string>(lightWallpaper);
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">Theme</h2>
      <DarkModeToggle />
      <h2 className="font-semibold">Dark Wallpaper</h2>
      <div className="flex w-full items-center gap-2">
        <Input
          type="text"
          placeholder="Enter URL"
          value={darkWallpaperUrl}
          onChange={(e) => setDarkWallpaperUrl(e.target.value)}
        />
        <Button
          type="submit"
          onClick={() => setDarkWallpaper(darkWallpaperUrl)}
          disabled={darkWallpaper === darkWallpaperUrl}
        >
          Apply
        </Button>
      </div>
      <Image
        src={darkWallpaper}
        alt=""
        width={300}
        height={300}
        className="aspect-video rounded-lg"
      />
      <h2 className="font-semibold">Light Wallpaper</h2>
      <div className="flex w-full items-center gap-2">
        <Input
          type="text"
          placeholder="Enter URL"
          value={lightWallpaperUrl}
          onChange={(e) => setLightWallpaperUrl(e.target.value)}
        />
        <Button
          type="submit"
          onClick={() => setLightWallpaper(lightWallpaperUrl)}
          disabled={lightWallpaper === lightWallpaperUrl}
        >
          Apply
        </Button>
      </div>
      <Image
        src={lightWallpaper}
        alt=""
        width={300}
        height={300}
        className="aspect-video rounded-lg"
      />
    </div>
  );
}

function NetworkTab(): ReactNode {
  return <div className="flex flex-col gap-2"></div>;
}

export default function SettingsApp() {
  const [currentTab, setCurrentTab] = useState<string>(Tabs[0].id);
  return (
    <div className="select-none">
      <aside className="absolute left-0 top-0 flex h-full w-48 flex-col border-r border-muted bg-background">
        <ScrollArea>
          <div className="flex flex-col gap-2 p-2">
            {Tabs.map((tab, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => setCurrentTab(tab.id)}
                className={cn("flex justify-start gap-2", {
                  "bg-muted": currentTab === tab.id,
                })}
              >
                <tab.icon />
                {tab.label}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </aside>
      <div className="pl-48">
        <div className="p-4">
          {Tabs.map((tab, index) => (
            <Fragment key={index}>
              {tab.id === currentTab && (
                <>
                  <h1 className="text-2xl font-bold">{tab.label}</h1>
                  <Separator className="my-2" />
                  {tab.content}
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
