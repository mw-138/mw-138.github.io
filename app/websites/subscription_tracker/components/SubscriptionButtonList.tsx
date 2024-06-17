"use client";

import React from "react";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";
import SubscriptionButton from "./Subscription";

export default function SubscriptionButtonList() {
  const { sortedSubscriptions } = useSubscriptionTrackerContext();
  return (
    <div className="minimal-scrollbar flex h-96 w-auto flex-col gap-4 overflow-auto bg-slate-800 p-4 backdrop-blur-md lg:h-auto lg:w-96">
      {sortedSubscriptions.map((subscription, index) => (
        <SubscriptionButton
          key={index}
          index={index}
          subscription={subscription}
        />
      ))}
    </div>
  );
}
