import React, { ElementType } from "react";
import Link from "next/link";

interface LinkProps {
  color?: string;
  label?: string;
  href: string;
  disabled?: boolean;
  src?: any;
}

const NavLink = ({ color, label, href, src }: LinkProps) => {
  let colorStyles;
  switch (color) {
    case "white":
      colorStyles = "text-white group-hover:text-gray-400";
      break;
    case "slate":
      colorStyles = "text-slate-500 group-hover:text-slate-700";
      break;
    case "gray":
      colorStyles = "text-gray-500 group-hover:text-gray-700";
      break;
    case "stone":
      colorStyles = "text-stone-500 group-hover:text-stone-700";
      break;
    case "red":
      colorStyles = "text-red-500 group-hover:text-red-700";
      break;
    case "orange":
      colorStyles = "text-orange-500 group-hover:text-orange-700";
      break;
    case "yellow":
      colorStyles = "text-yellow-500 group-hover:text-yellow-700";
      break;
    case "lime":
      colorStyles = "text-lime-500 group-hover:text-lime-700";
      break;
    case "green":
      colorStyles = "text-green-500 group-hover:text-green-700";
      break;
    case "teal":
      colorStyles = "text-teal-500 group-hover:text-teal-700";
      break;
    case "cyan":
      colorStyles = "text-cyan-500 group-hover:text-cyan-700";
      break;
    case "sky":
      colorStyles = "text-sky-500 group-hover:text-sky-700";
      break;
    case "blue":
      colorStyles = "text-blue-500 group-hover:text-blue-700";
      break;
    case "violet":
      colorStyles = "text-violet-400 group-hover:text-violet-700";
      break;
    case "purple":
      colorStyles = "text-purple-500 group-hover:text-purple-700";
      break;
    case "fuchsia":
      colorStyles = "text-fuchsia-500 group-hover:text-fuchsia-700";
      break;
    case "pink":
      colorStyles = "text-pink-500 group-hover:text-pink-700";
      break;
    case "rose":
      colorStyles = "text-rose-500 group-hover:text-rose-700";
      break;
  }

  return (
    <Link href={href}>
      <a className="group flex flex-col justify-center items-center">
        <span
          className={`ease-in-out duration-200 cursor-pointer uppercase
        ${colorStyles}`}
        >
          {src}
        </span>
        <span
          className={`
      font-sans font-bold ease-in-out duration-200 cursor-pointer uppercase
      ${colorStyles}
      `}
        >
          {label}
        </span>
      </a>
    </Link>
  );
};

export default NavLink;
