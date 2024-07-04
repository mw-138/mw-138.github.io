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
import SignInForm from "./SignInForm";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <PageTemplate>
      <MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <Link
            href="/register"
            className={cn(buttonVariants({ variant: "link" }), "px-0")}
          >
            Don&apos;t have an account?
          </Link>
          <GitHubLoginButton />
          <Separator className="my-8" />
          <SignInForm />
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </PageTemplate>
  );
}
