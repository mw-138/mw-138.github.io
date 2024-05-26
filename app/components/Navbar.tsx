import Link from "next/link";
import React from "react";

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

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
