"use client";

import { Film, Languages, List, LogIn, LogOut, Tv } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const Logo = () => {
  return (
    <Link href="/websites/netflix">
      <Image
        src="/netflix.png"
        width={128}
        height={70}
        alt=""
        className="mx-4 mr-8 object-contain"
      />
    </Link>
  );
};

interface NavigationEntry {
  icon: any;
  label: string;
  href: string;
  hide: string;
}

const Nav = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);
  const [mainNavItems] = useState<NavigationEntry[]>([
    { icon: Tv, label: "Series", href: "#", hide: "md" },
    { icon: Film, label: "Films", href: "#", hide: "md" },
    {
      icon: Tv,
      label: "New & Popular",
      href: "#",
      hide: "md",
    },
    { icon: List, label: "My List", hide: "md", href: "#" },
    {
      icon: Languages,
      label: "Browse by Languages",
      href: "#",
      hide: "md",
    },
  ]);
  const [authenticationNavItems] = useState<NavigationEntry[]>([
    {
      icon: LogIn,
      label: "Login",
      href: "#",
      hide: "md",
    },
    {
      icon: LogOut,
      label: "Signup",
      href: "#",
      hide: "md",
    },
  ]);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = hamburgerMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hamburgerMenuOpen]);

  return (
    <>
      <div
        className={`navbar-transition z-50 flex h-16 w-full items-center justify-between bg-gradient-to-b from-black/60 to-transparent p-5 ${
          isSticky
            ? "fixed left-0 top-0 shadow-lg backdrop-blur-sm"
            : "absolute"
        }`}
      >
        <div className="flex items-center">
          <Logo />
          <ul className="flex flex-row gap-2">
            {mainNavItems.map((item, index) => {
              const NavIcon = item.icon;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`items-center justify-center gap-2 rounded-md bg-transparent px-4 py-2 text-white transition-all hover:bg-netflix-red ${item.hide}:flex hidden`}
                  >
                    <NavIcon />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="hidden flex-row gap-2 md:flex">
          {authenticationNavItems.map((item, index) => {
            const NavIcon = item.icon;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center justify-center gap-2 rounded-md bg-transparent px-4 py-2 text-white transition-all hover:bg-netflix-red"
                >
                  <NavIcon />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          className="rounded-md bg-transparent px-4 py-2 text-white transition-all hover:bg-netflix-red md:hidden"
          onClick={toggleHamburgerMenu}
        >
          <MdMenu />
        </button>
      </div>
      <div
        className={`absolute bottom-0 left-0 z-50 flex h-full w-full flex-col transition-opacity ${hamburgerMenuOpen ? "pointer-events-auto bg-black/50 opacity-100 backdrop-blur-md" : "pointer-events-none opacity-0"}`}
        onClick={() => setHamburgerMenuOpen(false)}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <button
            className="rounded-md bg-transparent px-4 py-2 text-white transition-all hover:bg-netflix-red md:hidden"
            onClick={toggleHamburgerMenu}
          >
            <MdClose />
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          {mainNavItems.map((item, index) => {
            const NavIcon = item.icon;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`mx-4 flex items-center gap-2 rounded-md px-4 py-2 text-white transition-all hover:bg-netflix-red`}
                >
                  <span>
                    <NavIcon />
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="absolute bottom-5 left-5 flex flex-row gap-2">
          {authenticationNavItems.map((item, index) => {
            const NavIcon = item.icon;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 rounded-md bg-transparent px-4 py-2 text-white transition-all hover:bg-netflix-red"
                >
                  <span>
                    <NavIcon />
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
