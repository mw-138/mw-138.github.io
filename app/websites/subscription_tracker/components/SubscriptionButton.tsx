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
        className="rounded-md p-2"
        checked={isMultiselected}
      />
      <button
        className={`bg-subscription-tracker-primary-800 flex flex-1 flex-col gap-2 rounded-md ${isMultiselected && "ring-2 ring-red-500"} hover:bg-subscription-tracker-primary-700 active:bg-subscription-tracker-primary-600 p-4 transition-colors disabled:bg-red-900`}
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
        <div className="text-subscription-tracker-text-300 flex w-full flex-row items-center justify-between">
          <h2 className="font-semibold">
            {formatToCurrencyString(subscription.price)}
          </h2>
          <h2 className="font-semibold capitalize">{subscription.type}</h2>
        </div>
      </button>
    </div>
  );
}
