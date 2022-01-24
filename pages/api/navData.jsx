import { IoPersonSharp, IoSearch } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {
  FaGamepad,
  FaBookReader,
  FaVideo,
  FaShoppingCart,
} from "react-icons/fa";

export const navData = [
  {
    title: "blog",
    href: "/blog",
    src: <FaBookReader />,
    color: "violet",
  },
  {
    title: "videos",
    href: "/videos",
    src: <FaVideo />,
    color: "orange",
  },
  {
    title: "contact",
    href: "/contact",
    src: <MdEmail />,
    color: "yellow",
  },
];
