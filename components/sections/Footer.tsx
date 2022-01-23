import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineGlobe } from "react-icons/hi";
import Link from "next/link";

const Footer = () => (
  <div
    id="contact"
    className="px-4 mobile:px-12 mt-20 sm:px-20 sm:mt-32 md:px-28 lg:px-40"
  >
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full text-center mb-12 font-mono">
        <h1 className="text-slate-300 text-2xl sm:text-5xl md:text-6xl font-bold">
          <span className="text-slate-300 text-xl mobile:text-3xl font-bold">
            <span className="text-teal-500">4.</span> Do you have a project in
            mind?
          </span>
          <br />
          <span className="font-sans text-teal-500 hover:text-pink-500 ease-in-out duration-200 text-2xl mobile:text-5xl cursor-pointer">
            <a>Let's work together</a>
          </span>
        </h1>
      </div>

      <div className="font-mono text-teal-500 hover:text-pink-500 flex justify-center items-center p-4 border-2 rounded-md border-teal-500 hover:border-pink-500 ease-in-out duration-200 text-center mb-10 cursor-pointer">
        <p className=" text-sm sm:text-lg leading-5">
          <a href="mailto:geluajm@gmail.com">Connect with me</a>
        </p>
      </div>

      <div className="text-slate-300 flex justify-between items-start flex-row flex-wrap w-full text-left">
        <div className="mt-4 mx-0 sm:m-4 w-64 flex flex-col gap-4">
          <Link href="/">
            <a>
              <img
                className="w-20"
                alt={"JMG Logo"}
                src={"/images/svg/logo.svg"}
              />
            </a>
          </Link>
          <p>
            Web Engineer <br /> All Rights Reserved
          </p>
        </div>
        <div className="flex flex-start flex-col my-4 sm:m-4">
          <h4 className="text-sm leading-4 mb-4 font-bold text-teal-500">
            Links
          </h4>
          <p className="text-xs my-2 mx-0 cursor-pointer">
            <a href="#about">About</a>
          </p>
          <p className="text-xs my-2 mx-0 cursor-pointer">
            <a href="#experience">Experience</a>
          </p>
          <p className="text-xs my-2 mx-0 cursor-pointer">
            <a href="#work">Work</a>
          </p>
          <p className="text-xs my-2 mx-0 cursor-pointer">
            <a href="mailto:geluajm@gmail.com">Contact</a>
          </p>
        </div>
        <div className="flex flex-start flex-col my-4 sm:m-4">
          <h4 className="text-sm leading-4 mb-4 font-bold text-teal-500">
            Social
          </h4>
          <p className="text-xs my-2 mx-0 cursor-pointer">
            <a
              href={"https://github.com/jmski"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Github
            </a>
          </p>
          <p className="text-xs my-2 mx-0 cursor-pointer">
            <a
              href={"https://linkedin.com/in/jmgelua"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              LinkedIn
            </a>
          </p>
          <p className="text-xs my-2 mx-0 cursor-pointer">
            <a
              href={"https://leetcode.com/jmgelua"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Leetcode
            </a>
          </p>
          <p className="text-xs my-2 mx-0 cursor-pointer">
            <a href="/JonMichaelGeluaResume2022.pdf" target="_blank">
              Resume
            </a>
          </p>
        </div>
        <div className="flex flex-start flex-col my-4 sm:m-4">
          <h4 className="text-sm leading-4 mb-4 font-bold text-teal-500">
            Jon-Michael Gelua
          </h4>
          <p className="text-xs my-2 mx-0">
            Toronto, Ontario, Canada <HiOutlineGlobe className="inline-block" />
          </p>
          <p className="text-xs my-2 mx-0">
            <a href="tel:647-834-1667">
              Call me on my <AiOutlinePhone className="inline-block" />
            </a>
          </p>
          <p className="text-xs my-2 mx-0">
            <a href="mailto:geluajm@gmail.com">
              geluajm@gmail.com <AiOutlineMail className="inline-block" />
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 text-center w-full my-4 sm:m-4">
        <p className="text-xs text-slate-300 hover:text-teal-500 ease-in-out duration-200 ">
          @2021 JMG. All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
