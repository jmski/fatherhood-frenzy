import React from "react";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Social = () => {
  const socialData = [
    {
      title: "youtube",
      href: "https://youtube.com/fatherhoodfrenzy",
      icon: <FaYoutube size={40} />,
    },
    {
      title: "instagram",
      href: "https://instagram.com/fatherhoodfrenzy",
      icon: <FaInstagram size={40} />,
    },
    {
      title: "facebook",
      href: "https://facebook.com/fatherhoodfrenzy",
      icon: <FaFacebook size={40} />,
    },
    {
      title: "email",
      href: "mailto:fatherhoodfrenzy@gmail.com",
      icon: <MdEmail size={40} />,
    },
  ];

  const onSubmitHandler = () => {};

  return (
    <div className="w-full bg-stone-200 py-12">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <span className="text-xl font-sans">
          Want to join the fatherhood team?
        </span>
        <h2 className="text-2xl font-bold text-black uppercase tracking-widest">
          Join the frenzy
        </h2>
        <form>
          <input
            className="outline-0 py-2 px-4 rounded-tl-md rounded-bl-md"
            placeholder="Subscribe"
          />
          <button
            className="bg-rose-500 hover:bg-rose-700 py-2 px-4 rounded-tr-md rounded-br-md text-black hover:text-white ease-in-out duration-200"
            onSubmit={onSubmitHandler}
          >
            Sign Up
          </button>
        </form>
        <div className="flex gap-8">
          {socialData.map((element, index) => (
            <Link href={element.href} key={index}>
              <a target={"_blank"}>{element.icon}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
