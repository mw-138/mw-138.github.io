"use client";

import { useContext } from "react";
import { LifeSimulatorContext } from "../context/LifeSimulatorContext";
import { Button } from "@/components/ui/button";

// Show a list of available jobs, as well as current job progression.

export default function Work() {
  const context = useContext(LifeSimulatorContext);
  return (
    <>
      <h1 className="border-b border-muted p-2 text-lg font-bold uppercase">
        Work
      </h1>
      {context.jobs.map((job, index) => (
        <Button
          key={index}
          variant="outline"
          onClick={() => context.setCurrentJob(job.id)}
        >
          {job.label}
        </Button>
      ))}
    </>
  );
}
