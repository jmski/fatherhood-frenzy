import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../../services";
import { IoIosArrowDown } from "react-icons/io";

const Categories = ({ widget = true }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <>
      {widget && widget ? (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            Categories
          </h3>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="cursor-pointer block pb-3 mb-3">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        // category bar
        <div className="bg-white my-12 h-full p-20">
          <h3 className="font-bold text-6xl mb-8">Categories</h3>
          <ul className="flex border-t border-b capitalize">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <li className="bg-white flex items-center gap-3 p-8 ease-in-out duration-200 hover:bg-stone-100">
                  {category.name}
                  <IoIosArrowDown />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Categories;
