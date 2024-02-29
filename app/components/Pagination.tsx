import Link from "next/link";
import React from "react";

interface PaginationEntry {
  label: string;
  link: string;
}

interface PaginationProps {
  entries: PaginationEntry[];
  className?: string;
}

const Pagination = (props: PaginationProps) => {
  const { entries, className } = props;
  return (
    <div className={`text-sm breadcrumbs ${className}`}>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <Link href={entry.link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              {entry.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
