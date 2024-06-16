"use client";

import React, { useContext, useState } from "react";
import { LifeSimulatorContext } from "../context/LifeSimulatorContext";
import {
  MdHome,
  MdInventory,
  MdLocalActivity,
  MdOutlineWork,
  MdRefresh,
} from "react-icons/md";
import { FaPeopleGroup, FaPerson } from "react-icons/fa6";
import { FaBuilding, FaCog } from "react-icons/fa";
import ProgressButton from "./ProgressButton";
import { formatCurrency } from "@/utils/helperFunctions";
import Home from "../pages/home";
import Character from "../pages/character";
import Work from "../pages/work";

interface CharacterStatProps {
  label: string;
  color: string;
  percentage: number;
}

function CharacterStat(props: CharacterStatProps) {
  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <span>{props.label}:</span>
      <div className="h-1/2 w-8/12 overflow-hidden bg-black/25">
        <div
          className={`h-full ${props.color} transition-all`}
          style={{
            width: `${props.percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function Game() {
  const context = useContext(LifeSimulatorContext);

  const [tabs] = useState<any[]>([
    { id: "home", label: "Home", icon: <MdHome /> },
    { id: "character", label: "Character", icon: <FaPerson /> },
    { id: "inventory", label: "Inventory", icon: <MdInventory /> },
    { id: "work", label: "Work", icon: <MdOutlineWork /> },
    {
      id: "relationships",
      label: "Relationships",
      icon: <FaPeopleGroup />,
    },
    { id: "properties", label: "Properties", icon: <FaBuilding /> },
    {
      id: "activities",
      label: "Activities",
      icon: <MdLocalActivity />,
    },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  function getStatPercentage(current: number, max: number): number {
    return (current / max) * 100;
  }

  function getFormattedDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
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
      <main className="flex h-screen select-none flex-row border-2 border-zinc-600 bg-zinc-900 text-sm">
        <div className="flex flex-1 flex-col bg-zinc-800">
          {/* <div className="flex bg-orange-500 p-2 font-bold uppercase text-zinc-900">
            Note: Client side only
          </div> */}
          <div className="flex p-2 text-lg font-bold uppercase">
            Life Simulator
          </div>
          {context.inDebt && (
            <div className="bg-red-500 p-2 text-zinc-800">You are in debt!</div>
          )}
          <div className="p-2">Name: {context.name}</div>
          <div className="p-2">Age: {context.getAge()}</div>
          <div className="p-2">Job: {context.currentJob?.label}</div>
          <div className="p-2">Cash: {formatCurrency(context.cash)}</div>
          <div className="p-2">Bank: {formatCurrency(context.bank)}</div>
          <div className="p-2">
            Date: {getFormattedDate(new Date(context.currentTimestamp))}
          </div>
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
          <div className="flex h-full flex-col overflow-auto border-t-2 border-zinc-600 bg-zinc-700">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 px-2 py-1 transition-colors hover:bg-zinc-600 ${tab.id === activeTab ? "bg-zinc-600" : "bg-transparent"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex flex-row items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </div>
              </button>
            ))}
            <ProgressButton
              speed={10}
              progressFill="bg-red-500"
              className="flex items-center gap-2 bg-red-900 px-2 py-1 transition-colors hover:bg-red-700"
              onComplete={context.resetData}
            >
              <div className="flex flex-row items-center gap-2">
                <MdRefresh />
                Reset
              </div>
            </ProgressButton>
          </div>
        </div>
        <div className="flex w-8/12 flex-col overflow-auto border-l-2 border-r-2 border-zinc-600">
          {renderContent()}
        </div>
        {context.storyEntries.length > 0 ? (
          <div className="flex flex-1 flex-col-reverse overflow-auto">
            {context.storyEntries
              .map((entry, index) => (
                <div
                  key={index}
                  className="flex gap-2 border-b-2 border-zinc-600 bg-zinc-700 p-1 first:border-0 even:bg-zinc-800"
                >
                  <span>{getFormattedDate(new Date(entry.timestamp))}:</span>
                  {entry.text}
                </div>
              ))
              .reverse()}
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            No Story Entries.
          </div>
        )}
      </main>
    </>
  );
}
