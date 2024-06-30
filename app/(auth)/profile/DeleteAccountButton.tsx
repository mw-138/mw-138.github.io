"use client";

import { Button } from "@/components/ui/button";
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

  return (
    <Button
      variant="destructive"
      className="flex gap-2"
      onClick={() => deleteAccount()}
    >
      <Trash />
      Delete Account
    </Button>
  );
}
