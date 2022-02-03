import React from "react";
import Nav from "../../components/blog/Nav";
import Categories from "../../components/blog/Categories";
import { FeaturedPosts, PostCard, PostWidget } from "../../components/blog";
import { getPosts } from "../../services";

const Blog = ({ posts }) => {
  return (
    <>
      <Nav />
      <Categories widget={false} />
      <FeaturedPosts />
      <div>
        {posts.map((post) => (
          <PostCard post={post.node} key={post.title} />
        ))}
      </div>
      <PostWidget />
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
