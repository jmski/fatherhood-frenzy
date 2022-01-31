import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = (e, input) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="rounded-lg bg-fixed bg-email min-h-96 bg-cover bg-center flex flex-col justify-center items-center space-y-6">
      <div>
        <img src={"/images/ff-banner-white-small.png"} />
      </div>
      <h2 className="text-3xl font-semibold text-white uppercase tracking-widest">
        Join the frenzy
      </h2>

      <form
        onSubmit={(e) => onSubmitHandler(e, email)}
        className="flex flex-col lg:flex-row"
      >
        <input
          className="outline-0 py-4 px-6 h-12 rounded-3xl mb-4 lg:mr-4 w-full"
          type="email"
          placeholder="Subscribe"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          type="submit"
          className="text-white text-lg font-medium bg-rose-500 hover:bg-teal-600 px-6 h-12 rounded-3xl whitespace-nowrap cursor-pointer ease-in-out duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Email;
