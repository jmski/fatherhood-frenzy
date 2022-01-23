import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const onSubmitHandler = (searchInput) => {};

  return (
    <div className="py-12">
      <form className="flex justify-center items-center">
        <input
          className="outline-0 border-2 border-rose-500 px-2 py-4"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="bg-rose-500 p-4 rounded-tr-lg rounded-br-lg">
          <IoSearch size={28} />
        </button>
      </form>
    </div>
  );
};

export default Search;
