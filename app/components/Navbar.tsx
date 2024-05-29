"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 800 800"
      className="fill-base-content"
    >
      <path
        className="cls-1"
        d="M257,579.132V729L400,533.906,543,728.113V294.472l-57.733,57.641-0.888,199.528-83.491-114.4-85.267,114.4V522.377Zm0-72.717,57.733-57.641,0.888-201.3L400,362.755l85.267-115.283v30.151L543,219.981V71L400.888,266.094,257,71V506.415Z"
      />
    </svg>
  );
};

class Theme {
  public label: string;
  public value: string;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}

const Navbar = () => {
  const { changeTheme } = useContext(ThemeContext);
  const themes: Theme[] = [
    new Theme("Default", "custom"),
    new Theme("Light", "light"),
    new Theme("Dark", "dark"),
    new Theme("Cupcake", "cupcake"),
    new Theme("Bumblebee", "bumblebee"),
    new Theme("Emerald", "emerald"),
    new Theme("Corporate", "corporate"),
    new Theme("Synthwave", "synthwave"),
    new Theme("Retro", "retro"),
    new Theme("Cyberpunk", "cyberpunk"),
    new Theme("Valentine", "valentine"),
    new Theme("Halloween", "halloween"),
    new Theme("Garden", "garden"),
    new Theme("Forest", "forest"),
    new Theme("Aqua", "aqua"),
    new Theme("Lofi", "lofi"),
    new Theme("Pastel", "pastel"),
    new Theme("Fantasy", "fantasy"),
    new Theme("Wireframe", "wireframe"),
    new Theme("Black", "black"),
    new Theme("Luxury", "luxury"),
    new Theme("Dracula", "dracula"),
    new Theme("Cmyk", "cmyk"),
    new Theme("Autumn", "autumn"),
    new Theme("Business", "business"),
    new Theme("Acid", "acid"),
    new Theme("Lemonade", "lemonade"),
    new Theme("Night", "night"),
    new Theme("Coffee", "coffee"),
    new Theme("Winter", "winter"),
    new Theme("Dim", "dim"),
    new Theme("Nord", "nord"),
    new Theme("Sunset", "sunset"),
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Icon />
        <Link href="/" className="text-md btn btn-ghost md:text-xl">
          Matthew Watson
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="group btn m-1">
          Theme
          <FaChevronDown className="group-focus:hidden" />
          <FaChevronUp className="hidden group-focus:block" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-50 flex max-h-60 w-52 flex-col gap-2 overflow-auto rounded-box bg-base-300 p-2 shadow-2xl"
        >
          {themes.map((theme, index) => (
            <li key={index}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                aria-label={theme.label}
                value={theme.value}
                onClick={() => changeTheme(theme.value)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
