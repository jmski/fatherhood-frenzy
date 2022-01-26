import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navData } from "../pages/api/navData";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const changeNav = () =>
    window.scrollY >= 70 ? setScrollNav(true) : setScrollNav(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  });

  return (
    <div
      className={`z-50 sticky top-0 px-12 py-8 ease-in-out duration-500
    ${scrollNav ? "bg-white" : "bg-stone-800"} `}
    >
      <div className="flex flex-row justify-center xl:justify-between items-center gap-8">
        <div>
          <Link href="/">
            <a>
              <img
                src={`${
                  scrollNav
                    ? "/images/svg/ff-nav-banner-black.svg"
                    : "/images/svg/ff-nav-banner-white.svg"
                }`}
              />
            </a>
          </Link>
        </div>
        <div className="hidden md:flex font-mono">
          <ul className="flex justify-between items-center gap-12 lg:text-md xl:text-xl">
            {navData.map((element, index) => (
              <li key={index}>
                <NavLink
                  src={element.src}
                  href={element.href}
                  color={element.color}
                  label={element.title}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden ml-4 relative ">
          {menuOpen ? (
            <RiCloseLine
              className="scale-up-center"
              color={`${scrollNav ? "#000" : "#fff"}`}
              size={35}
              onClick={toggleMenu}
            />
          ) : (
            <RiMenu3Line
              className="scale-up-center"
              color={`${scrollNav ? "#000" : "#fff"}`}
              size={35}
              onClick={toggleMenu}
            />
          )}
          {menuOpen && (
            <div
              className={`text-right p-8 absolute right-0 top-20 min-w-2xs gap-4 rounded-md shadow-sm scale-up-center ease-in-out duration-500
              ${scrollNav ? "bg-white" : "bg-stone-800"}
              `}
            >
              <ul className="flex flex-col items-end gap-12 mb-12 text-xl">
                {navData.map((element, index) => (
                  <li key={index}>
                    <NavLink
                      href={element.href}
                      color={element.color}
                      label={element.title}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
