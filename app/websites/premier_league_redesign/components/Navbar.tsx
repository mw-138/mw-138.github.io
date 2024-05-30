import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Team from "../classes/Team";

type NavbarProps = {
  teams: Team[];
};

const Navbar = ({ teams }: NavbarProps) => {
  return (
    <div className="flex flex-row border-b-8 border-white bg-white">
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
        <div className="flex flex-row gap-4 p-2">
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
        <nav className="bg-premier-league-purple flex items-center rounded-tl-lg p-2">
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
                className="hover:bg-premier-league-purple text-md flex cursor-pointer flex-row items-center gap-2 rounded p-2 font-bold text-white transition-colors"
              >
                {tab}
                <FaChevronDown size={10} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="bg-premier-league-purple flex flex-row items-center overflow-hidden rounded-bl-lg">
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
              className="hover:bg-premier-league-pink rounded-tl-lg rounded-tr-lg p-4 text-xs font-bold text-white transition-colors first:rounded-tl-none"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
