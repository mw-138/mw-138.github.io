"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icons } from "./Icons";
import NavContact from "./NavContact";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { DarkModeToggle } from "./DarkModeToggle";

interface NavLink {
  id: string;
  label: string;
  href: string;
}

const links: NavLink[] = [
  { id: "about", label: "About", href: "/about" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/" },
];

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return isOpen ? (
    <div className="absolute left-0 top-0 h-screen w-screen bg-background/80 backdrop-blur-md">
      <div className="fixed inset-0 z-40 flex overflow-y-scroll overscroll-y-none">
        <div className="w-full">
          <div className="relative flex h-full w-full flex-col overflow-y-auto bg-background pb-12 shadow-xl">
            <div className="flex items-center justify-between gap-3 border-b border-muted p-6">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="relative inline-flex items-center justify-center p-2"
              >
                <X className="h-6 w-6" aria-hidden />
              </Button>
              <Icons.siteLogo className="h-12 w-12 fill-foreground" />
            </div>

            <div className="space-y-4 p-4">
              {links.map((link, index) => {
                if (link.id === "contact") {
                  return <NavContact key={index} isMobile />;
                }
                return (
                  <Link
                    key={index}
                    onClick={() => closeOnCurrent(link.href)}
                    href={link.href}
                    className={cn(
                      "w-full",
                      buttonVariants({ variant: "outline" }),
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <Separator />

            <div className="space-y-4 p-4">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Button
      type="button"
      variant="outline"
      onClick={() => setIsOpen(true)}
      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 lg:hidden"
    >
      <Menu className="h-6 w-6" aria-hidden />
    </Button>
  );
}
