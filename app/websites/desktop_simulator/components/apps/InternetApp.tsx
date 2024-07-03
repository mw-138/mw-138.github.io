"use client";

import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import { ReactNode, useState } from "react";
import InternetTab from "../InternetTab";

export interface Tab {
  label: string;
  content: ReactNode;
}

const NewTabTemplate: Tab = {
  label: "New Tab",
  content: <InternetTab />,
};

function InternetApp() {
  const [tabs, setTabs] = useState<Tab[]>([NewTabTemplate]);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  const CurrentTab = tabs[currentTabIndex];

  function addNewTab(): void {
    setTabs((prev) => {
      const newTab = NewTabTemplate;
      return [...prev, newTab];
    });
    setCurrentTabIndex(tabs.length);
  }

  function closeTab(index: number): void {
    setTabs((prev) => {
      setCurrentTabIndex(prev.length - 1);
      return prev.filter((_tab, tabIndex) => tabIndex !== index);
    });
  }

  return (
    <div className="flex w-full select-none flex-col">
      <div className="flex items-center justify-between gap-2 bg-background p-2">
        <ScrollArea>
          <div className="flex w-max space-x-2">
            <Button variant="outline" onClick={addNewTab}>
              <Plus />
            </Button>
            {tabs.map((tab, index) => (
              <ContextMenu key={index}>
                <ContextMenuTrigger>
                  <Button
                    key={index}
                    className="flex gap-2"
                    onClick={() => setCurrentTabIndex(index)}
                    variant={currentTabIndex === index ? "default" : "outline"}
                  >
                    {tab.label}
                  </Button>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem onClick={() => closeTab(index)}>
                    Close
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      {CurrentTab ? (
        <ScrollArea>{CurrentTab.content}</ScrollArea>
      ) : (
        <p className="flex h-full items-center justify-center">
          No Tabs Active
        </p>
      )}
    </div>
  );
}

export default InternetApp;
