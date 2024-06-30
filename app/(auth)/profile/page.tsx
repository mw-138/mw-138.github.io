import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTemplate from "@/components/PageTemplate";
import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DeleteAccountButton from "./DeleteAccountButton";
import { authOptions } from "@/lib/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  console.log(session);

  return (
    <PageTemplate>
      <MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <Separator className="my-8" />
          <div className="mb-4">
            <p>Name: {session.user?.name}</p>
            <p>Email: {session.user?.email}</p>
          </div>
          <DeleteAccountButton />
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </PageTemplate>
  );
}
