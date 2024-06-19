"use client";

import { useContext } from "react";
import { LifeSimulatorContext } from "../context/LifeSimulatorContext";

// Show a list of available jobs, as well as current job progression.

export default function Work() {
  const context = useContext(LifeSimulatorContext);
  return (
    <>
      <h1 className="p-4 text-lg font-bold uppercase">Work</h1>
      {context.jobs.map((job, index) => (
        <button
          key={index}
          className="bg-blue-500 px-2 py-1 hover:bg-blue-600"
          onClick={() => context.setCurrentJob(job.id)}
        >
          {job.label}
        </button>
      ))}
    </>
  );
}
