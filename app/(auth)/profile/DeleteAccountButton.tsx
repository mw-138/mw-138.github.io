"use client";

import SimpleDialog from "@/components/SimpleDialog";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DeleteAccountButton() {
  const session = useSession();
  const router = useRouter();

  if (!session) {
    return null;
  }

  const email = session.data ? session.data.user?.email : undefined;

  if (email === undefined) {
    return null;
  }

  async function deleteAccount(): Promise<void> {
    const res = await fetch("api/deleteAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      signOut();
      console.log("Account deleted");
      router.push("/");
    } else {
      console.log("Failed to delete account");
    }
  }

  // <Dialog>
  //           <DialogTrigger className={buttonVariants({ variant: "outline" })}>
  //             Delete
  //           </DialogTrigger>
  //           <DialogContent>
  //             <DialogHeader>
  //               <DialogTitle>Are you sure?</DialogTitle>
  //               <DialogDescription>
  //                 This action cannot be undone. This will permanently delete
  //                 this subscription.
  //               </DialogDescription>
  //             </DialogHeader>
  //             <DialogFooter>
  //               <DialogClose asChild>
  //                 <Button variant="outline">No</Button>
  //               </DialogClose>
  //               <DialogClose asChild>
  //                 <Button
  //                   variant="outline"
  //                   onClick={() => deleteSubscription(index)}
  //                 >
  //                   Yes
  //                 </Button>
  //               </DialogClose>
  //             </DialogFooter>
  //           </DialogContent>
  //         </Dialog>

  return (
    <SimpleDialog
      label="Delete Account"
      title="Delete Account"
      description="Are you sure you want to delete your account? This process is permanent."
      icon={Trash}
      variant="destructive"
      showFooter={false}
    >
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">No</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="destructive" onClick={deleteAccount}>
            Yes
          </Button>
        </DialogClose>
      </DialogFooter>
    </SimpleDialog>
  );
}
