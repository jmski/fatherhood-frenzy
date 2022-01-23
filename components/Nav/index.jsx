import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { navData } from "../../pages/api/navData";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-stone-800 z-50 sticky top-0 px-12 py-8">
      <div className="flex flex-row md:flex-col xl:flex-row justify-center xl:justify-between items-center gap-8">
        <div>
          <Link href="/">
            <a>
              <img src={"/images/svg/ff-title.svg"} />
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
              color="#fff"
              size={35}
              onClick={toggleMenu}
            />
          ) : (
            <RiMenu3Line
              className="scale-up-center"
              color="#fff"
              size={35}
              onClick={toggleMenu}
            />
          )}
          {menuOpen && (
            <div className="bg-stone-800 text-right p-8 absolute right-0 top-20 min-w-2xs gap-4 rounded-md shadow-sm scale-up-center">
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
