import GitHubLoginButton from "@/components/GitHubLoginButton";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTemplate from "@/components/PageTemplate";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/authOptions";
import { cn } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import RegisterForm from "./RegisterForm";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <PageTemplate>
      <MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6">
          <h1 className="text-2xl font-bold">Register</h1>
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "link" }), "px-0")}
          >
            Already have an account?
          </Link>
          <GitHubLoginButton />
          <Separator className="my-8" />
          <RegisterForm />
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </PageTemplate>
  );
}
