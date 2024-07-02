"use client";

import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { usePathname } from "next/navigation";
import { CommandPanel } from "./CommandPanel";
import { DarkModeToggle } from "./DarkModeToggle";

const Footer = () => {
  const showFooterActions = usePathname().includes("/websites");
  return (
    <div className="inset-x-0 h-16 bg-background">
      <footer className="relative bg-background">
        <MaxWidthWrapper>
          <div className="border-t border-muted">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Icons.siteLogo className="h-10 w-10 fill-foreground" />
              </div>

              <div className="z-50 ml-8 flex self-stretch">
                <div className="flex w-full items-center gap-4">
                  <p>
                    Copyright © Matthew Watson {new Date().getFullYear()} - All
                    Rights Reserved.
                  </p>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {showFooterActions && (
                    <>
                      <CommandPanel />
                      <DarkModeToggle />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </div>
  );
};

export default Footer;
