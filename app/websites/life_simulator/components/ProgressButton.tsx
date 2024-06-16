"use client";

import { useState, useRef, useEffect } from "react";

interface ProgressButtonProps {
  speed: number;
  progressFill: string;
  className?: string;
  onComplete: () => void;
  children?: React.ReactNode;
}

export default function ProgressButton(props: ProgressButtonProps) {
  const [progress, setProgress] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onCompleteCalled = useRef(false);

  const startProgress = () => {
    onCompleteCalled.current = false;
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + 1, 100);
        if (newProgress === 100 && !onCompleteCalled.current) {
          stopProgress();
          onCompleteCalled.current = true;
          props.onComplete();
        }
        return newProgress;
      });
    }, props.speed);
  };

  const stopProgress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setProgress(0);
    }
  };

  const handleMouseDown = () => {
    setProgress(0);
    startProgress();
  };

  const handleMouseUp = () => {
    stopProgress();
  };

  const handleMouseLeave = () => {
    stopProgress();
  };

  return (
    <div className="relative">
      <div
        className={`flex h-full w-full cursor-pointer ${props.className}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="z-10">{props.children}</div>
      </div>
      <div
        className={`pointer-events-none absolute left-0 top-0 h-full ${props.progressFill}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
