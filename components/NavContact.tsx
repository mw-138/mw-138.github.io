import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

interface NavContactProps {
  isMobile?: boolean;
}

export default function NavContact({ isMobile = false }: NavContactProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {isMobile ? (
          <Button variant="outline" className="w-full">
            Contact
          </Button>
        ) : (
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn("cursor-pointer", navigationMenuTriggerStyle())}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </DrawerTrigger>
      <DrawerContent className="pb-4">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Contact</DrawerTitle>
            <DrawerDescription>Contact me via the following:</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="flex items-center justify-center gap-4 space-x-2">
              <div className="flex flex-row items-center gap-2">
                <Link
                  href="https://www.linkedin.com/in/matthew-watson-311642170/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin size={40} />
                </Link>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Link
                  href="https://github.com/mw-138"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size={40} />
                </Link>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Link
                  href="mailto:mattheww138@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MdEmail size={40} />
                </Link>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
