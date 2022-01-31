import React from "react";
import {
  PostCard,
  Categories,
  PostWidget,
  FeaturedPosts,
  NavBar,
} from "../../components/blog";
import { getPosts } from "../../services";

const BlogPage = ({ posts }) => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-10 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
