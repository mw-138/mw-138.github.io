"use client";

import { useRpgClickerGameContext } from "../context/RpgClickerGameContext";

export default function Header() {
  const context = useRpgClickerGameContext();
  return <div className="flex h-16 bg-green-500"></div>;
}
