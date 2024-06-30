import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTemplate from "@/components/PageTemplate";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SignInForm from "./SignInForm";

export default function page() {
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
          <Separator className="my-8" />
          <SignInForm />
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </PageTemplate>
  );
}
