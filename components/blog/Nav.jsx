import React from "react";
import { navData } from "../../pages/api/navData";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 px-8 md:px-12 lg:px-20 py-5 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="max-h-20 min-w-3xs max-w-sm">
          <Link href="/blog">
            <a>
              <img src={"/images/svg/ff-nav-banner-black.svg"} />
            </a>
          </Link>
        </div>
        <ul className="hidden xl:flex space-x-12">
          {navData.map((link) => (
            <li key={link.title} className="cursor-pointer">
              <Link href={link.href}>
                <a className="font-medium text-lg capitalize">{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center space-x-12">
          <Link href="/help">
            <a className="hidden sm:flex">Need Help?</a>
          </Link>
          <button className="hidden sm:flex bg-stone-100 hover:bg-stone-200 ease-in duration-200 rounded-full px-6 py-4 active:scale-95">
            <Link href="/start">
              <a>Start</a>
            </Link>
          </button>
          <span className="border border-black rounded-full p-4 text-xl sm:text-3xl active:scale-95">
            <FaHamburger />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
