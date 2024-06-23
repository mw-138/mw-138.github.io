"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit } from "lucide-react";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";
import Subscription from "../interfaces/Subscription";
import { SubscriptionDialog } from "./SubscriptionDialog";

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
    deleteSubscription,
  } = useSubscriptionTrackerContext();
  const isMultiselected = multiselectedSubscriptionsIds.includes(
    subscription.id,
  );
  return (
    <div className="flex items-center gap-4">
      <Checkbox
        id="select_all"
        onCheckedChange={() => toggleMultiselectedSubscription(subscription.id)}
        checked={isMultiselected}
      />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {subscription.label}
            <span>{formatToCurrencyString(subscription.price)}</span>
          </CardTitle>
          <CardDescription>
            {isSubscriptionDueToday(subscription) ? (
              <p className="capitalize">Due today</p>
            ) : (
              <p className="capitalize">
                Due in {getSubscriptionDueDate(subscription)}{" "}
                {getSubscriptionDueDate(subscription) <= 1 ? "day" : "days"}
              </p>
            )}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            disabled={isMultiselected}
            onClick={() => deleteSubscription(index)}
          >
            Delete
          </Button>
          <SubscriptionDialog
            buttonLabel="Edit"
            isEditing
            subscriptionIndex={index}
            buttonDisabled={isMultiselected}
            buttonIcon={Edit}
          />
        </CardFooter>
      </Card>
    </div>
  );
}
