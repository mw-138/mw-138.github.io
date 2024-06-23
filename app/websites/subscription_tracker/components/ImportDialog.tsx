"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Import } from "lucide-react";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";

export default function ImportDialog() {
  const {
    importDialogActive,
    setImportDialogActive,
    importCode,
    handleImportCodeChange,
    closeImport,
    importSubscriptions,
  } = useSubscriptionTrackerContext();
  return (
    <Dialog open={importDialogActive} onOpenChange={setImportDialogActive}>
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() => setImportDialogActive(true)}
      >
        <Import />
        Import
      </Button>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import Subscriptions</DialogTitle>
          <DialogDescription>
            Enter subscriptions backup code.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Code</Label>
            <Input
              name="code"
              placeholder="Enter code"
              className="col-span-3"
              onChange={handleImportCodeChange}
              value={importCode}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={closeImport}>
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={importSubscriptions}
            disabled={importCode === ""}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
