import Link from "next/link";
import React from "react";
import { MdChevronLeft } from "react-icons/md";

const WebsiteNavigation = () => {
  return (
    <div className="navbar">
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center px-1">
          <li>
            <Link href="/projects">
              <span>
                <MdChevronLeft size={20} />
              </span>
              Return To Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebsiteNavigation;
