"use client";

import Subscription from "../interfaces/Subscription";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";

type SubscriptionButtonProps = {
  index: number;
  subscription: Subscription;
};

export default function SubscriptionButton({
  index,
  subscription,
}: SubscriptionButtonProps) {
  const {
    editSubscription,
    isSubscriptionDueToday,
    getSubscriptionDueDate,
    formatToCurrencyString,
    toggleMultiselectedSubscription,
    multiselectedSubscriptionsIds,
  } = useSubscriptionTrackerContext();
  const isMultiselected = multiselectedSubscriptionsIds.includes(
    subscription.id,
  );
  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        name="select_all"
        placeholder="Enter label"
        onChange={() => toggleMultiselectedSubscription(subscription.id)}
        className="rounded-md bg-white/20 p-2 text-white placeholder-white/50"
        checked={isMultiselected}
      />
      <button
        className={`flex flex-1 flex-col gap-2 rounded-md bg-slate-700 ${isMultiselected && "ring-2 ring-red-500"} p-4 text-white transition-colors hover:bg-slate-900 active:bg-slate-600 disabled:bg-red-900`}
        onClick={() => editSubscription(index)}
        disabled={isMultiselected}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="font-bold">{subscription.label}</h1>
          <h1 className="font-bold">
            {isSubscriptionDueToday(subscription) ? (
              <p className="capitalize">Due today</p>
            ) : (
              <p className="capitalize">
                Due in {getSubscriptionDueDate(subscription)}{" "}
                {getSubscriptionDueDate(subscription) <= 1 ? "day" : "days"}
              </p>
            )}
          </h1>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <h2 className="font-semibold">
            {formatToCurrencyString(subscription.price)}
          </h2>
          <h2 className="font-semibold capitalize text-white/30">
            {subscription.type}
          </h2>
        </div>
      </button>
    </div>
  );
}
