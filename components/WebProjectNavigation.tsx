import Breadcrumbs from "@/components/Breadcrumbs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";

const WebProjectNavigation = () => {
  return (
    <div className="bg-background py-2">
      <MaxWidthWrapper className="flex items-center justify-between bg-background">
        <Link
          href="/projects"
          className={cn(
            "flex flex-row gap-2",
            buttonVariants({ variant: "outline" }),
          )}
        >
          <MdChevronLeft size={20} />
          Return To Projects
        </Link>
        <Breadcrumbs
          entries={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
          ]}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default WebProjectNavigation;
