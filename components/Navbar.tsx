"use client";

import { CommandPanel } from "./CommandPanel";
import { DarkModeToggle } from "./DarkModeToggle";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNavbar from "./MobileNavbar";
import { NavbarLinks } from "./NavbarLinks";

export default function Navbar() {
  // const { data: session } = useSession();
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-background">
      <header className="relative bg-background">
        <MaxWidthWrapper>
          <div className="border-b border-muted">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex items-center gap-4 lg:ml-0">
                <MobileNavbar />
                <Icons.siteLogo className="h-10 w-10 fill-foreground" />
              </div>

              <div className="z-50 hidden lg:ml-8 lg:flex lg:self-stretch">
                <div className="flex w-full gap-4">
                  <NavbarLinks />
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                  <CommandPanel />
                  <DarkModeToggle />
                  {/* {session ? (
                    <SessionAvatar />
                  ) : (
                    <div className="flex">
                      <Link
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "flex gap-2 rounded-r-none border-r-0",
                        )}
                        href="/register"
                      >
                        <UserPlus />
                        Register
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "flex gap-2 rounded-l-none",
                        )}
                        href="/signIn"
                      >
                        <LogIn />
                        Sign In
                      </Link>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
