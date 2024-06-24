"use client";

import React, { useContext, useState } from "react";
import { LifeSimulatorContext } from "../context/LifeSimulatorContext";
import ProgressButton from "./ProgressButton";
import { formatCurrency, formatDateToYyyyMmDd } from "@/utils/helperFunctions";
import Home from "../pages/home";
import Character from "../pages/character";
import Work from "../pages/work";
import { Button } from "@/components/ui/button";
import { HomeIcon, User, Box, Clipboard, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CharacterStatProps {
  label: string;
  color: string;
  percentage: number;
}

function CharacterStat(props: CharacterStatProps) {
  return (
    <div className="flex items-center justify-between p-2">
      <span>{props.label}:</span>
      <Progress value={props.percentage} className="w-8/12" />
    </div>
  );
}

export default function Game() {
  const context = useContext(LifeSimulatorContext);

  const [tabs] = useState<any[]>([
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "character", label: "Character", icon: User },
    { id: "inventory", label: "Inventory", icon: Box },
    { id: "work", label: "Work", icon: Clipboard },
    {
      id: "relationships",
      label: "Relationships",
      icon: User,
    },
    { id: "properties", label: "Properties", icon: User },
    {
      id: "activities",
      label: "Activities",
      icon: User,
    },
    { id: "settings", label: "Settings", icon: User },
  ]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  function getStatPercentage(current: number, max: number): number {
    return (current / max) * 100;
  }

  function renderContent(): React.ReactNode {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "character":
        return <Character />;
      case "work":
        return <Work />;
      default:
        return (
          <div className="flex h-screen items-center justify-center font-bold uppercase">
            Page not found.
          </div>
        );
    }
  }

  return (
    <>
      <main className="flex min-h-screen w-full select-none flex-col text-sm">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background py-2 sm:flex">
          <h1 className="border-b border-muted p-2 text-lg font-bold uppercase">
            Life Simulator
          </h1>
          <Card className="m-2">
            <h2 className="border-b border-muted p-2 font-bold uppercase">
              Info
            </h2>
            {context.inDebt && (
              <p className="p-2 text-red-500">You are in debt!</p>
            )}
            <p className="p-2">Name: {context.name}</p>
            <p className="p-2">Age: {context.getAge()}</p>
            <p className="p-2">Job: {context.currentJob?.label}</p>
            <p className="p-2">Cash: {formatCurrency(context.cash)}</p>
            <p className="p-2">Bank: {formatCurrency(context.bank)}</p>
            <p className="p-2">
              Date: {formatDateToYyyyMmDd(new Date(context.currentTimestamp))}
            </p>
            <CharacterStat
              label="Health"
              color="bg-red-500"
              percentage={getStatPercentage(context.health, 100)}
            />
            <CharacterStat
              label="Hunger"
              color="bg-orange-500"
              percentage={getStatPercentage(context.hunger, 100)}
            />
            <CharacterStat
              label="Thirst"
              color="bg-blue-500"
              percentage={getStatPercentage(context.thirst, 100)}
            />
            <CharacterStat
              label="Energy"
              color="bg-yellow-500"
              percentage={getStatPercentage(context.energy, 100)}
            />
          </Card>
          <ScrollArea className="m-2 mt-0">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                variant={tab.id === activeTab ? "secondary" : "outline"}
                className="my-2 flex w-full items-center justify-start gap-2"
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon />
                {tab.label}
              </Button>
            ))}
            <Button
              variant="outline"
              className="my-2 flex w-full items-center justify-start gap-2"
              onClick={context.resetData}
            >
              <RefreshCcw />
              Reset
            </Button>
          </ScrollArea>
        </aside>
        <div className="p-2 px-64">{renderContent()}</div>
        <aside className="fixed inset-y-0 right-0 z-10 hidden w-64 flex-col border-l bg-background py-2 sm:flex">
          <h1 className="border-b border-muted p-2 text-lg font-bold uppercase">
            Story Entries
          </h1>
          {context.storyEntries.length > 0 ? (
            <ScrollArea className="flex flex-1 flex-col-reverse gap-2">
              {context.storyEntries
                .map((entry, index) => (
                  <Card
                    key={index}
                    className="flex gap-2 border-b-2 border-muted bg-muted/40 p-1 first:border-0 even:bg-muted/80"
                  >
                    <span>
                      {formatDateToYyyyMmDd(new Date(entry.timestamp))}:
                    </span>
                    {entry.text}
                  </Card>
                  // <div
                  //   key={index}
                  //   className="flex gap-2 border-b-2 border-muted bg-muted/40 p-1 first:border-0 even:bg-muted/80"
                  // >
                  //   <span>
                  //     {formatDateToYyyyMmDd(new Date(entry.timestamp))}:
                  //   </span>
                  //   {entry.text}
                  // </div>
                ))
                .reverse()}
            </ScrollArea>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              No Story Entries.
            </div>
          )}
        </aside>
      </main>
    </>
  );
}
