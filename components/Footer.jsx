import React from "react";
import Link from "next/link";
import { navData } from "../pages/api/navData";
import { socialData } from "../pages/api/socialData";
import { footerData } from "../pages/api/footerData";

const Footer = () => {
  return (
    <div className="sm:w-4/5 mx-auto h-1/4">
      <div className="flex flex-col">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-8">
            <h3 className="text-3xl text-gray-400 mb-4">
              © 2022. Fatherhood Frenzy.
            </h3>
            <p className="text-gray-400">
              Our website services, content and products are for informational
              purposes only. Fatherhood Frenzy does not provide medical advice,
              diagnosis, or treatment
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex sm:justify-evenly pt-8">
            <ul className="pl-8 flex flex-col w-1/2 sm:w-full space-y-2 text-xl capitalize">
              {navData.map((nav) => (
                <li key={nav.title}>
                  <Link href={nav.href}>
                    <a>{nav.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col w-1/2 sm:w-full space-y-2 text-xl capitalize">
              {socialData.map((nav) => (
                <li key={nav.title}>
                  <Link href={nav.href}>
                    <a>{nav.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="flex flex-col space-y-2 sm:space-y-0 md:flex-row justify-between p-8 border-t text-gray-500 border-gray-400">
          {footerData.map((nav) => (
            <li key={nav.title}>
              <Link href={nav.href}>
                <a>{nav.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
