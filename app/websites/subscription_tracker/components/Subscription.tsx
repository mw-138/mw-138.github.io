"use client";

import React from "react";
import Subscription from "../interfaces/Subscription";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";

export default function SubscriptionButton({
  index,
  subscription,
}: {
  index: number;
  subscription: Subscription;
}) {
  const {
    editSubscription,
    isSubscriptionDueToday,
    getSubscriptionDueDate,
    formatToCurrencyString,
  } = useSubscriptionTrackerContext();
  return (
    <button
      className="flex flex-col gap-2 rounded-md bg-slate-700 p-4 text-white backdrop-blur-md transition-colors hover:bg-slate-900 active:bg-slate-600"
      onClick={() => editSubscription(index)}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="font-bold">{subscription.label}</h1>
        <h1 className="font-bold text-white/60">
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
        <h2 className="font-semibold text-white">
          {formatToCurrencyString(subscription.price)}
        </h2>
        <h2 className="font-semibold capitalize text-white/30">
          {subscription.type}
        </h2>
      </div>
    </button>
  );
}
