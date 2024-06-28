"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Eye } from "lucide-react";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";
import Subscription from "../interfaces/Subscription";
import { EditSubscriptionDialog } from "./SubscriptionDialog";

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
    getNextPaymentDate,
    getSubscriptionTotalSpend,
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
            <span>
              {formatToCurrencyString(subscription.price)}
              {}
            </span>
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
          <Dialog>
            <DialogTrigger className={buttonVariants({ variant: "outline" })}>
              Delete
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  this subscription.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">No</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    onClick={() => deleteSubscription(index)}
                  >
                    Yes
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="flex gap-2">
            <EditSubscriptionDialog
              mode="edit"
              buttonLabel="Edit"
              subscriptionIndex={index}
              buttonDisabled={isMultiselected}
              buttonIcon={Edit}
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Eye />
                  View
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Viewing Subscription</DialogTitle>
                  <DialogDescription>
                    View subscription details.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold">Label:</span>{" "}
                    {subscription.label}
                  </div>
                  <div>
                    <span className="font-semibold">Price:</span>{" "}
                    {formatToCurrencyString(subscription.price)}
                  </div>
                  <div>
                    <span className="font-semibold">Type:</span>{" "}
                    <span className="capitalize">{subscription.type}</span>
                  </div>
                  <div>
                    <span className="font-semibold">First Payment Date:</span>{" "}
                    {subscription.firstPaymentDate}
                  </div>
                  <div>
                    <span className="font-semibold">Next Payment Date:</span>{" "}
                    {getNextPaymentDate(subscription)}
                  </div>
                  <div>
                    <span className="font-semibold">Total Spend:</span>{" "}
                    {formatToCurrencyString(
                      getSubscriptionTotalSpend(subscription),
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
