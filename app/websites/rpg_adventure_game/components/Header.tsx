"use client";

import { useRpgClickerGameContext } from "../context/RpgClickerGameContext";

export default function Header() {
  const context = useRpgClickerGameContext();
  return <div className="flex h-16 border-b border-muted"></div>;
}
