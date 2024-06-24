"use client";

import React, { useContext } from "react";
import { LifeSimulatorContext } from "../context/LifeSimulatorContext";

// Provide general overview of multiple areas.

export default function Home() {
  const context = useContext(LifeSimulatorContext);
  return (
    <>
      <h1 className="border-b border-muted p-2 text-lg font-bold uppercase">
        Home
      </h1>
    </>
  );
}
