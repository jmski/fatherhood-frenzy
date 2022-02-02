import React from "react";
import Link from "next/link";
import { navData } from "../../pages/api/navData";
import { socialData } from "../../pages/api/socialData";

const NavMenu = ({ menu }) => {
  return (
    <div
      className={`
      fixed top-0 flex flex-col sm:flex-row h-screen w-full z-20
      ${
        menu
          ? "top-0 ease-in-out duration-500"
          : "-top-full ease-in-out duration-500"
      }
      `}
    >
      <div className="bg-blue-500 sticky h-screen w-full sm:w-1/2 flex flex-col justify-center pl-8 lg:pl-20">
        <ul className="text-3xl sm:text-4xl lg:text-5xl text-white capitalize space-y-8 mb-12">
          {navData.map((link) => (
            <li
              key={link.title}
              className="ease-in-out duration-200 transform hover:translate-x-4"
            >
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
          {socialData.map((link) => (
            <li
              key={link.title}
              className="ease-in-out duration-200 transform hover:translate-x-4"
            >
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
