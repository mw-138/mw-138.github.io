import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Team from "../classes/Team";
import { IoMdMenu } from "react-icons/io";

type NavbarProps = {
  teams: Team[];
};

const SmallNavbar = ({ teams }: NavbarProps) => {
  return (
    <div className="flex flex-row items-center justify-between bg-white p-4 md:hidden">
      <Image
        src="/premier-league.png"
        width={96}
        height={96}
        alt=""
        className="aspect-square"
      />
      <div className="rounded p-2 text-premier-league-purple transition-colors hover:bg-premier-league-purple hover:text-white">
        <IoMdMenu size={46} />
      </div>
    </div>
  );
};

const MediumNavbar = ({ teams }: NavbarProps) => {
  return (
    <div className="hidden flex-row items-center justify-between bg-white p-4 max-lg:flex max-md:hidden">
      <Image
        src="/premier-league.png"
        width={96}
        height={96}
        alt=""
        className="aspect-square"
      />
      <div className="rounded p-2 text-premier-league-purple transition-colors hover:bg-premier-league-purple hover:text-white">
        <IoMdMenu size={46} />
      </div>
    </div>
  );
};

const LargeNavbar = ({ teams }: NavbarProps) => {
  return (
    <div className="hidden flex-row border-y-8 border-white bg-white md:flex lg:border-t-0">
      <div className="flex items-center justify-center p-2">
        <Image
          src="/premier-league.png"
          width={96}
          height={96}
          alt=""
          className="aspect-square"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="hidden flex-row gap-4 p-2 lg:flex">
          {teams.map((team, index) => (
            <Image
              key={index}
              src={team.image}
              width={32}
              height={32}
              alt=""
              className="aspect-square transition-transform hover:scale-110"
            />
          ))}
        </div>
        <nav className="flex items-center rounded-tl-lg bg-premier-league-purple p-2">
          <ul className="flex flex-row gap-2">
            {[
              "Premier League",
              "Fantasy",
              "Football & Community",
              "About",
              "More",
            ].map((tab, index) => (
              <li
                key={index}
                className="text-md flex cursor-pointer flex-row items-center gap-2 rounded p-2 font-bold text-white transition-colors hover:bg-premier-league-purple"
              >
                {tab}
                <FaChevronDown size={10} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-row items-center overflow-hidden rounded-bl-lg bg-premier-league-purple">
          {[
            "Home",
            "Fixtures",
            "Results",
            "Tables",
            "Transfers",
            "Stats",
            "News",
            "Video",
            "Watch Live",
            "Tickets",
            "Clubs",
            "Players",
            "Awards",
          ].map((tab, index) => (
            <button
              key={index}
              className="rounded-tl-lg rounded-tr-lg p-4 text-xs font-bold text-white transition-colors first:rounded-tl-none hover:bg-premier-league-pink"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ teams }: NavbarProps) => {
  return (
    <>
      <SmallNavbar teams={teams} />
      {/* <MediumNavbar teams={teams} /> */}
      <LargeNavbar teams={teams} />
    </>
  );
};

export default Navbar;
