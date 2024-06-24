"use client";

import { useRpgClickerGameContext } from "../context/RpgClickerGameContext";

export default function Sidebar() {
  const context = useRpgClickerGameContext();
  return <div className="flex w-52 border-r border-muted"></div>;
}
