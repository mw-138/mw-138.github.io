"use client";

import SimpleTooltip from "@/components/SimpleTooltip";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { copyToClipboard } from "@/utils/helperFunctions";
import { useState } from "react";
import { toast } from "sonner";

interface Command {
  output: () => string;
}

interface CommandTextEntry {
  date: string;
  input: string;
}

const Commands: { [key: string]: Command } = {
  hello: {
    output: () => {
      return "world!";
    },
  },
};

export default function TerminalApp() {
  const [entries, setEntries] = useState<CommandTextEntry[]>([]);
  const [command, setCommand] = useState<CommandTextEntry>({
    date: "",
    input: "",
  });

  function submitCommand(): void {
    const entry =
      Commands[command.input] === undefined
        ? `'${command.input}' is an invalid command.`
        : Commands[command.input].output();
    const date = new Date().toLocaleTimeString();
    const inputEntry = { date, input: command.input };
    const outputEntry = { date, input: entry };
    setEntries((prev) => [...prev, inputEntry, outputEntry]);
    setCommand({ date: "", input: "" });
  }

  return (
    <div className="flex w-full flex-col">
      <ScrollArea className="flex flex-1 p-0">
        {entries.map((entry, index) => (
          <ContextMenu key={index}>
            <ContextMenuTrigger>
              <SimpleTooltip message="Right click for more...">
                <p
                  key={index}
                  className="select-none border-b p-2 transition-colors hover:bg-muted/50"
                >
                  {entry.date}: {entry.input}
                </p>
              </SimpleTooltip>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem
                onClick={() => {
                  toast("Copied entry to clipboard.");
                  copyToClipboard(entry.input);
                }}
              >
                Copy
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </ScrollArea>
      <div className="flex">
        <Input
          type="text"
          className="h-10 rounded-b-lg rounded-t-none border-x-0 border-b-0 focus-visible:ring-0"
          placeholder="Enter command"
          onChange={(e) =>
            setCommand((prev) => ({ ...prev, input: e.target.value }))
          }
          onSubmit={submitCommand}
          value={command.input}
        />
        <Button
          type="submit"
          variant="outline"
          className="rounded-none border-0 border-l border-t"
          onClick={submitCommand}
        >
          Enter
        </Button>
        <Button
          type="submit"
          variant="outline"
          className="rounded-none border-0 border-l border-t"
          onClick={() => setEntries([])}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
