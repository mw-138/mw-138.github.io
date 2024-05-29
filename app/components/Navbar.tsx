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
    new Theme("Default", "mytheme"),
    new Theme("Light", "light"),
    // new Theme("dark", "dark"),
    // new Theme("cupcake", "cupcake"),
    // new Theme("bumblebee", "bumblebee"),
    // new Theme("emerald", "emerald"),
    // new Theme("corporate", "corporate"),
    new Theme("Synthwave", "synthwave"),
    // new Theme("retro", "retro"),
    new Theme("Cyberpunk", "cyberpunk"),
    // new Theme("valentine", "valentine"),
    // new Theme("halloween", "halloween"),
    // new Theme("garden", "garden"),
    new Theme("Forest", "forest"),
    // new Theme("aqua", "aqua"),
    // new Theme("lofi", "lofi"),
    // new Theme("pastel", "pastel"),
    // new Theme("fantasy", "fantasy"),
    // new Theme("wireframe", "wireframe"),
    // new Theme("black", "black"),
    // new Theme("luxury", "luxury"),
    // new Theme("dracula", "dracula"),
    // new Theme("cmyk", "cmyk"),
    // new Theme("autumn", "autumn"),
    new Theme("Business", "business"),
    // new Theme("acid", "acid"),
    // new Theme("lemonade", "lemonade"),
    new Theme("Night", "night"),
    // new Theme("coffee", "coffee"),
    // new Theme("winter", "winter"),
    new Theme("Dim", "dim"),
    // new Theme("nord", "nord"),
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
          className="dropdown-content z-50 w-52 rounded-box bg-base-300 p-2 shadow-2xl"
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
