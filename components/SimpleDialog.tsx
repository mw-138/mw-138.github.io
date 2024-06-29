"use client";

import { cn } from "@/lib/utils";
import { LucideIcon, LucideProps } from "lucide-react";
import { MouseEventHandler, PropsWithChildren, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface SimpleDialogProps extends PropsWithChildren {
  label: string;
  icon: LucideIcon;
  iconProps?: LucideProps;
  title?: string;
  description?: string;
  onOpen?: () => void;
  onClose?: () => void;
  isDisabled?: boolean;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
}

export default function SimpleDialog({
  label,
  icon: Icon,
  iconProps,
  title,
  description,
  children,
  onOpen,
  onClose,
  isDisabled = false,
  variant = "default",
}: SimpleDialogProps) {
  const [open, setOpen] = useState<boolean>(false);

  const hasTitle = title !== undefined;
  const hasDescription = description !== undefined;
  const showHeader = hasTitle || hasDescription;

  return (
    <Dialog
      open={open}
      onOpenChange={(open: boolean) => {
        setOpen(open);
        if (open) {
          if (onOpen) onOpen();
        } else {
          if (onClose) onClose();
        }
      }}
    >
      <DialogTrigger
        className={cn(buttonVariants({ variant }), "flex items-center gap-2")}
        disabled={isDisabled}
      >
        <Icon {...iconProps} />
        {label}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {showHeader && (
          <DialogHeader>
            {hasTitle && <DialogTitle>{title}</DialogTitle>}
            {hasDescription && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
        )}
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button
            // onClick={(e) => {
            //   handleFormSubmit(e);
            //   setIsOpen(false);
            // }}
            // disabled={formData.label === ""}
            >
              {/* {isEditing ? "Update" : "Submit"} */}
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
