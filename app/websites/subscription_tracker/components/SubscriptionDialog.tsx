"use client";

import { Button, buttonVariants } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";
import SubscriptionType from "../types/SubscriptionType";

export interface SubscriptionDialogButtonProps {
  mode: "add" | "edit";
  buttonLabel: string;
  buttonIcon?: LucideIcon;
  buttonIconSize?: number;
  buttonDisabled?: boolean;
  subscriptionIndex?: number;
}

export function EditSubscriptionDialog({
  mode,
  buttonLabel,
  buttonIcon: Icon = undefined,
  buttonIconSize = 16,
  buttonDisabled = false,
  subscriptionIndex = undefined,
}: SubscriptionDialogButtonProps) {
  const {
    handleFormChange,
    handleFormSubmit,
    formData,
    setFormData,
    editSubscription,
    cancelEdit,
  } = useSubscriptionTrackerContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isEditing = mode === "edit";
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open: boolean) => {
        setIsOpen(open);
        if (!open) {
          cancelEdit();
        }
      }}
    >
      <DialogTrigger
        className={cn(
          buttonVariants({ variant: isEditing ? "outline" : "default" }),
          "flex items-center gap-2",
        )}
        onClick={() => {
          if (isEditing) {
            if (subscriptionIndex !== undefined) {
              editSubscription(subscriptionIndex);
            } else {
              cancelEdit();
            }
          }
        }}
        disabled={buttonDisabled}
      >
        {Icon !== undefined && <Icon size={buttonIconSize} />}
        {buttonLabel}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit" : "Add"} Subscription</DialogTitle>
          <DialogDescription>
            {isEditing ? "Update" : "Enter"} subscription details.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Label</Label>
            <Input
              name="label"
              placeholder="Enter label"
              className="col-span-3"
              onChange={handleFormChange}
              value={formData.label}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Price</Label>
            <Input
              name="price"
              placeholder="Enter price"
              className="col-span-3"
              value={formData.price}
              type="number"
              onChange={handleFormChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Type</Label>
            <Select
              name="type"
              onValueChange={(e: SubscriptionType) =>
                setFormData((prev) => ({ ...prev, type: e }))
              }
              value={formData.type}
            >
              <SelectTrigger className="w-[180px] capitalize">
                <SelectValue placeholder={formData.type} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type</SelectLabel>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Date</Label>
            <Input
              name="firstPaymentDate"
              placeholder="Enter first payment date"
              className="col-span-3"
              type="date"
              value={formData.firstPaymentDate}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={(e) => {
                handleFormSubmit(e);
                setIsOpen(false);
              }}
              disabled={formData.label === ""}
            >
              {isEditing ? "Update" : "Submit"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
