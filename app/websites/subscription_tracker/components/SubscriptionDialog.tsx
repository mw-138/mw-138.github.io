"use client";

import { LucideIcon } from "lucide-react";

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubscriptionTrackerContext } from "../context/SubscriptionTrackerContext";

interface SubscriptionDialogButtonProps {
  buttonLabel: string;
  buttonIcon?: LucideIcon;
  buttonIconSize?: number;
  buttonDisabled?: boolean;
  isEditing?: boolean;
  subscriptionIndex?: number;
}

export function SubscriptionDialog({
  buttonLabel,
  buttonIcon: Icon = undefined,
  buttonIconSize = 16,
  buttonDisabled = false,
  isEditing = false,
  subscriptionIndex = undefined,
}: SubscriptionDialogButtonProps) {
  const {
    formDataDialogActive,
    setFormDataDialogActive,
    handleFormChange,
    handleFormSubmit,
    formData,
    editingSubscription,
    editSubscription,
    cancelEdit,
  } = useSubscriptionTrackerContext();
  return (
    <Dialog
      open={formDataDialogActive}
      onOpenChange={(open: boolean) => {
        setFormDataDialogActive(open);
        if (!open && isEditing) {
          cancelEdit();
        }
      }}
    >
      <Button
        className="flex items-center gap-2"
        onClick={() => {
          if (isEditing && subscriptionIndex !== undefined) {
            editSubscription(subscriptionIndex);
          } else {
            setFormDataDialogActive(true);
          }
        }}
        disabled={buttonDisabled}
      >
        {Icon !== undefined && <Icon size={buttonIconSize} />}
        {buttonLabel}
      </Button>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {editingSubscription ? "Edit" : "Add"} Subscription
          </DialogTitle>
          <DialogDescription>
            {editingSubscription ? "Update" : "Enter"} subscription details.
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
            <Select name="type" value={formData.type}>
              <SelectTrigger className="w-[180px] capitalize">
                <SelectValue
                  placeholder={formData.type}
                  defaultValue={formData.type}
                  onChange={handleFormChange}
                />
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
              placeholder="Enter date"
              className="col-span-3"
              type="date"
              value={formData.firstPaymentDate}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleFormSubmit}
            disabled={formData.label === ""}
          >
            {isEditing ? "Update" : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
