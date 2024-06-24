import { PropsWithChildren } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { TooltipContentProps, TooltipProps } from "@radix-ui/react-tooltip";

interface SimpleTooltipProps extends PropsWithChildren {
  message: string;
  contentProps?: TooltipContentProps;
}

export default function SimpleTooltip({
  message,
  contentProps,
  children,
}: SimpleTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent {...contentProps}>
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
