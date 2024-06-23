"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";
import SubscriptionButton from "./SubscriptionButton";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SubscriptionButtonList() {
  const {
    sortedSubscriptions,
    multiselectedSubscriptionsIds,
    deleteMultiselectedSubscriptions,
    toggleAllSubscriptions,
    setIsMultiselecting,
    isMultiselecting,
  } = useSubscriptionTrackerContext();
  return (
    <div className="flex h-auto w-full flex-col gap-4 overflow-hidden p-4">
      <div className="flex items-center justify-between border-b border-muted pb-2">
        <div className="flex h-10 items-center gap-4">
          <Checkbox
            id="select_all"
            className="rounded-md p-2"
            onCheckedChange={(e: boolean) => {
              toggleAllSubscriptions(e);
              setIsMultiselecting(e);
            }}
            checked={isMultiselecting}
          />
          <Label htmlFor="select_all">Select All</Label>
        </div>
        {multiselectedSubscriptionsIds.length > 0 && (
          <Button
            variant="destructive"
            onClick={deleteMultiselectedSubscriptions}
          >
            Delete {multiselectedSubscriptionsIds.length} Selected
          </Button>
        )}
      </div>
      <div className="minimal-scrollbar flex h-full flex-col gap-4 overflow-auto pr-2 pt-2">
        {sortedSubscriptions.map((subscription, index) => (
          <SubscriptionButton
            key={index}
            index={index}
            subscription={subscription}
          />
        ))}
      </div>
    </div>
  );
}
