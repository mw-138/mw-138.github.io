import React from "react";
import NavTab, { NavTabEntry } from "./NavTab";

const Nav = () => {
  const entries: NavTabEntry[] = [
    {
      label: "News",
      href: "#",
      options: [
        { label: "UK", href: "#" },
        { label: "US", href: "#" },
        { label: "World", href: "#" },
        { label: "UK Politics", href: "#" },
        { label: "Brexit", href: "#" },
        { label: "Health", href: "#" },
        { label: "Business", href: "#" },
        { label: "Science", href: "#" },
        { label: "Space", href: "#" },
        { label: "News Videos", href: "#" },
      ],
    },
    {
      label: "Sport",
      href: "#",
      options: [
        { label: "Football", href: "#" },
        { label: "Paris 2024 Olympics", href: "#" },
        { label: "Formula 1", href: "#" },
        { label: "Rugby Union", href: "#" },
        { label: "Cricket", href: "#" },
        { label: "Tennis", href: "#" },
        { label: "Boxing", href: "#" },
        { label: "UFC", href: "#" },
        { label: "Cycling", href: "#" },
        { label: "Golf", href: "#" },
        { label: "Betting", href: "#" },
        { label: "Sport Videos", href: "#" },
      ],
    },
    {
      label: "Culture",
      href: "#",
      options: [
        { label: "Film", href: "#" },
        { label: "TV & Radio", href: "#" },
        { label: "Music", href: "#" },
        { label: "Games", href: "#" },
        { label: "Books", href: "#" },
        { label: "Art", href: "#" },
        { label: "Photography", href: "#" },
        { label: "Theatre & Dance", href: "#" },
        { label: "Culture Videos", href: "#" },
      ],
    },
    {
      label: "Lifestyle",
      href: "#",
      options: [
        { label: "Shopping", href: "#" },
        { label: "Beauty", href: "#" },
        { label: "Fitness & Wellbeing", href: "#" },
        { label: "Tech", href: "#" },
        { label: "Money", href: "#" },
        { label: "Food & Drink", href: "#" },
        { label: "Fashion", href: "#" },
        { label: "Women", href: "#" },
        { label: "Health & Families", href: "#" },
        { label: "Royal Family", href: "#" },
        { label: "Motoring", href: "#" },
        { label: "Electric Vehicles", href: "#" },
        { label: "Car Insurance Deals", href: "#" },
        { label: "Lifestyle Videos", href: "#" },
      ],
    },
    {
      label: "Travel",
      href: "#",
      options: [
        { label: "UK Hotel Reviews", href: "#" },
        { label: "News & Advice", href: "#" },
        { label: "Cruises", href: "#" },
        { label: "UK", href: "#" },
        { label: "Europe", href: "#" },
        { label: "USA", href: "#" },
        { label: "Asia", href: "#" },
        { label: "Australia & New Zealand", href: "#" },
        { label: "South America", href: "#" },
        { label: "C. America & Caribbean", href: "#" },
        { label: "Middle East", href: "#" },
      ],
    },
  ];
  return (
    <>
      <div className="flex h-32 flex-col items-center justify-center text-4xl">
        <h1 className="text-md font-bold uppercase">Tyneside News</h1>
        <h2 className="text-sm">
          The best place for up-to-date news in the North East
        </h2>
      </div>
      <nav className="border-y border-black">
        <ul className="flex flex-row items-center justify-center">
          {entries.map((entry, index) => (
            <NavTab key={index} entry={entry} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
