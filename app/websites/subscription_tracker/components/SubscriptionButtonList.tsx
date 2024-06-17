"use client";

import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";
import SubscriptionButton from "./SubscriptionButton";

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
    <div className="flex h-96 w-auto flex-col gap-4 bg-slate-800 p-4 lg:h-auto lg:w-96">
      <div className="flex items-center justify-between border-b border-slate-700 pb-2">
        <div className="flex h-10 items-center gap-4">
          <input
            type="checkbox"
            name="select_all"
            placeholder="Enter label"
            className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
            onChange={(e) => {
              toggleAllSubscriptions(e.target.checked);
              setIsMultiselecting(e.target.checked);
            }}
            checked={isMultiselecting}
          />
          <label htmlFor="select_all">Select All</label>
        </div>
        {multiselectedSubscriptionsIds.length > 0 && (
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600 active:bg-red-400"
            onClick={deleteMultiselectedSubscriptions}
          >
            Delete {multiselectedSubscriptionsIds.length} Selected
          </button>
        )}
      </div>
      <div className="minimal-scrollbar flex flex-col gap-4 overflow-auto pr-4">
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
