import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { navData } from "../pages/api/navData";
import { socialData } from "../pages/api/socialData";
import Link from "next/link";

const Nav = ({ toggleMenu, menu, navBg }) => {
  return (
    <nav
      className={`sticky top-0 z-50 px-8 md:px-12 lg:px-20 -mt-28 ease-in-out duration-500
    ${navBg ? "bg-yellow-500 shadow-lg" : "transparent"}
    `}
    >
      <div className="flex justify-between items-center py-6">
        <div className="max-h-20 min-w-3xs max-w-md">
          <img src={"/images/svg/ff-nav-banner-white.svg"} />
        </div>

        <div className="flex flex-row justify-between items-center space-x-12">
          <ul className="hidden xl:flex flex-row text-white space-x-12">
            {menu && menu
              ? navData.map((link) => (
                  <li key={link.title} className="cursor-pointer">
                    <Link href={link.href}>
                      <a className="capitalize">{link.title}</a>
                    </Link>
                  </li>
                ))
              : socialData.map((link) => (
                  <li key={link.title} className="cursor-pointer">
                    <Link href={link.href}>
                      <a className="capitalize">{link.title}</a>
                    </Link>
                  </li>
                ))}
          </ul>
          <div className="hidden md:flex justify-between items-center text-white space-x-12">
            <Link href="/help">
              <a>Need Help?</a>
            </Link>
            <button>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </button>
          </div>

          <div
            onClick={toggleMenu}
            className="border rounded-full p-4 text-xl sm:text-3xl text-white"
          >
            {menu ? <FaHamburger /> : <FaTimes />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
