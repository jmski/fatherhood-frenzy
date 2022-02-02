import React from "react";
import Nav from "../../components/blog/Nav";
import Categories from "../../components/blog/Categories";

const Blog = () => {
  return (
    <>
      <Nav />
      <div className="bg-white my-12 h-full">
        <Categories widget={false} />
      </div>
    </>
  );
};

export default Blog;
