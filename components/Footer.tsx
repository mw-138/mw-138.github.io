"use client";

import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { CommandPanel } from "./CommandPanel";
import { DarkModeToggle } from "./DarkModeToggle";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const actionAllowedPages: string[] = [
    "/websites/subscription_tracker",
    "/websites/google",
    "/websites/life_simulator",
    "/websites/minimal_portfolio_01",
    "/websites/netflix",
    "/websites/tic_tac_toe",
    "/websites/premier_league_redesign",
    "/websites/rpg_adventure_game",
  ];
  const showFooterActions = actionAllowedPages.includes(pathname);
  return (
    <div className="inset-x-0 h-16 bg-background">
      <footer className="relative bg-background">
        <MaxWidthWrapper>
          <div className="border-t border-muted">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.siteLogo className="h-10 w-10 fill-foreground" />
                </Link>
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
