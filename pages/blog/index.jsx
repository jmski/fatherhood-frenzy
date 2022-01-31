import React from "react";
import { navData } from "../../pages/api/navData";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <nav className="bg-white sticky top-0 z-50 px-8 md:px-12 lg:px-20 py-5">
        <div className="flex justify-between items-center">
          <div className="max-h-20 min-w-3xs max-w-sm">
            <img src={"/images/svg/ff-nav-banner-black.svg"} />
          </div>
          <ul className="hidden xl:flex space-x-12">
            {navData.map((link) => (
              <li key={link.title} className="cursor-pointer">
                <Link href={link.href}>
                  <a className="capitalize">{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center space-x-12">
            <Link href="/help">
              <a className="hidden sm:flex">Need Help?</a>
            </Link>
            <button className="hidden sm:flex bg-stone-100 hover:bg-stone-200 ease-in duration-200 rounded-full px-6 py-4 active:scale-95">
              <Link href="/register">
                <a>Register</a>
              </Link>
            </button>
            <span className="border border-black rounded-full p-4 text-xl sm:text-3xl active:scale-95">
              <FaHamburger />
            </span>
          </div>
        </div>
      </nav>
      <div className="bg-white my-12 h-full">
        <h1>Categories</h1>
        <ul className="flex space-x-12 border-t border-b">
          <li className="bg-white ease-in-out duration-200 hover:bg-stone-200 p-4">
            fitness
          </li>
          <li className="bg-white ease-in-out duration-200 hover:bg-stone-200 p-4">Tech</li>
          <li className="bg-white ease-in-out duration-200 hover:bg-stone-200 p-4">parent</li>
          <li className="bg-white ease-in-out duration-200 hover:bg-stone-200 p-4">games</li>
        </ul>
      </div>
    </>
  );
};

export default Blog;
