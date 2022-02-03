import React from "react";
import { socialData } from "../../../pages/api/socialData";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-stone-800 py-12">
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="flex justify-center">
          <img src={"/images/ff-banner-white-small.png"} alt={"logo"} />
        </div>

        <div className="flex justify-center space-x-8">
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

        <p className="text-xs text-slate-300 hover:text-rose-500 ease-in-out duration-200 text-center cursor-pointer">
          @2021 Fatherhood Frenzy
          <br />
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
