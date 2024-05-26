"use client";

import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";

interface NavTabOption {
  label: string;
  href: string;
}

export interface NavTabEntry {
  label: string;
  href: string;
  options: NavTabOption[];
}

type NavTabProps = {
  entry: NavTabEntry;
};

const NavTab = ({ entry }: NavTabProps) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <li
      className="relative flex cursor-pointer items-center justify-center border-r border-black p-2 uppercase transition-colors first:border-l hover:bg-black hover:text-white"
      onClick={() => setActive(!active)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {entry.label}
      {active && entry.options.length > 0 && (
        <ul className="absolute left-0 top-full h-fit w-max bg-black p-2 text-white">
          {entry.options.map((option, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-4 p-2 transition-colors hover:bg-white hover:text-black"
            >
              {option.label}
              <span>
                <MdChevronRight size={20} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavTab;
