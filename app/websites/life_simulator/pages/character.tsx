"use client";

import React, { useContext } from "react";
import { LifeSimulatorContext } from "../context/LifeSimulatorContext";

// Show character information. (Backstory, statistics (Money made over time etc.), and character options (Force actions))

export default function Character() {
  const context = useContext(LifeSimulatorContext);
  return (
    <>
      <h1 className="border-b border-muted p-2 text-lg font-bold uppercase">
        Character
      </h1>
    </>
  );
}
