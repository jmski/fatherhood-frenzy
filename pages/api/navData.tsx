import React from "react";
import { IoPersonSharp, IoSearch } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {
  FaGamepad,
  FaBookReader,
  FaVideo,
  FaShoppingCart,
} from "react-icons/fa";

export const navLinks = [
  {
    title: "games",
    href: "/games",
    src: <FaGamepad />,
    color: "violet",
  },
  {
    title: "teach",
    href: "/learning",
    src: <FaBookReader />,
    color: "rose",
  },
  {
    title: "videos",
    href: "/videos",
    src: <FaVideo />,
    color: "orange",
  },
  {
    title: "merch",
    href: "/merch",
    src: <FaShoppingCart />,
    color: "yellow",
  },
  {
    title: "parenting",
    href: "/parents",
    src: <IoPersonSharp />,
    color: "teal",
  },
  {
    title: "contact",
    href: "/contact",
    src: <MdEmail />,
    color: "green",
  },
  {
    title: "search",
    href: "/search",
    src: <IoSearch />,
    color: "white",
  },
];
