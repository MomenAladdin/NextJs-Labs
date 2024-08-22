"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuLinks } from "./menuLinks";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            {menuLinks.map((item) => (
              <li
                key={item.href}
                className={
                  path == item.href
                    ? "md:px-4 md:py-2 bg-violet-700   text-white"
                    : "md:px-4 md:py-2 hover:text-indigo-400"
                }
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
            <span>New Here</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
