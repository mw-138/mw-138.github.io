"use client";

import Link from "next/link";
import { CommandPanel } from "./CommandPanel";
import { DarkModeToggle } from "./DarkModeToggle";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNavbar from "./MobileNavbar";
import { NavbarLinks } from "./NavbarLinks";

export default function Navbar() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-background">
      <header className="relative bg-background">
        <MaxWidthWrapper>
          <div className="border-b border-muted">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex items-center gap-4 lg:ml-0">
                <MobileNavbar />
                <Link href="/">
                  <Icons.siteLogo className="h-10 w-10 fill-foreground" />
                </Link>
              </div>

              <div className="z-50 hidden lg:ml-8 lg:flex lg:self-stretch">
                <div className="flex w-full gap-4">
                  <NavbarLinks />
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <CommandPanel />
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
