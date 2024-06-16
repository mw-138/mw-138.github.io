"use client";

import React, { useContext } from "react";
import { LifeSimulatorContext } from "../context/LifeSimulatorContext";

// Show character information. (Backstory, statistics (Money made over time etc.), and character options (Force actions))

export default function character() {
  const context = useContext(LifeSimulatorContext);
  return (
    <>
      <h1 className="p-4 text-lg font-bold uppercase">Character</h1>
    </>
  );
}
