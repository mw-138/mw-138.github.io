import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type MaxWidthWrapperProps = {
  className?: string;
  style?: any;
  addPadding?: boolean;
  children: ReactNode;
};

export default function MaxWidthWrapper({
  className,
  style,
  addPadding,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl p-2.5", className, {
        "px-2.5 md:px-20": addPadding,
      })}
      style={style}
    >
      {children}
    </div>
  );
}
