import React from "react";
import Link from "next/link";
import { socialData } from "../../pages/api/socialData";

const Social = () => {
  const onSubmitHandler = () => {};

  return (
    <div
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(/images/kite.jpg)` }}
    >
      <div className="max-w-2xl mx-auto px-8 py-12 rounded-xl bg-white bg-opacity-60">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <span className="text-2xl font-serif">
            Sign up for the Fatherhood Frenzy newsletter to get original
            articles and expert advice about parenting, education technology,
            fitness, and more in your inbox every day.
          </span>
          <div>
            <img src={"/images/ff-banner-black-small.png"} />
          </div>
          <h2 className="text-3xl font-bold text-black uppercase tracking-widest">
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
                <a target={"_blank"}>
                  <span className="text-black hover:text-rose-500 ease-in-out duration-200">
                    {element.icon}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
