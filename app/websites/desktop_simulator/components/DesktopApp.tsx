import SimpleTooltip from "@/components/SimpleTooltip";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useDesktopSimulatorContext } from "../context";
import App from "../interfaces/App";

interface DesktopAppProps {
  app: App;
}

export default function DesktopApp({ app }: DesktopAppProps) {
  const { toggleAppVisibility, pinnedApps, togglePinnedApp } =
    useDesktopSimulatorContext();
  const isPinned = pinnedApps.some((x) => app.id === x);
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <SimpleTooltip message={app.title}>
          <Button
            variant="outline"
            className="flex h-16 w-16 flex-col items-center justify-between border-none bg-background/0 hover:bg-background/20"
            onClick={() => toggleAppVisibility(app.id, true)}
          >
            <app.icon />
            <p className="text-[9px]">{app.title}</p>
          </Button>
        </SimpleTooltip>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => toggleAppVisibility(app.id, false)}>
          Close
        </ContextMenuItem>
        <ContextMenuItem onClick={() => togglePinnedApp(app.id, !isPinned)}>
          {isPinned ? "Unpin from taskbar" : "Pin to taskbar"}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
