import React from "react";
import { navData } from "../../pages/api/navData";
import { socialData } from "../../pages/api/socialData";
import Link from "next/link";
import NavLink from "./Nav/NavLink";

const Footer = () => {
  return (
    <div className="bg-stone-800 py-12">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex justify-center">
          <img src={"/images/ff-banner-white-small.png"} />
        </div>
        <div className="flex justify-center gap-8">
          {socialData.map((element, index) => (
            <Link href={element.href} key={index}>
              <a target={"_blank"}>
                <span className="text-white hover:text-rose-500 ease-in-out duration-200">
                  {element.icon}
                </span>
              </a>
            </Link>
          ))}
        </div>
        <ul className="flex flex-row justify-center gap-12 text-xl">
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
        <p className="text-xs text-slate-300 hover:text-rose-500 ease-in-out duration-200 text-center">
          @2021 Fatherhood Frenzy
          <br />
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
