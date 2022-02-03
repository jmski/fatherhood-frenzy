import React from "react";
import Categories from "../../components/blog/Categories";
import { FeaturedPosts, PostCard, PostWidget } from "../../components/blog";
import { getPosts } from "../../services";
import Nav from "../../components/blog/Nav";
import Footer from "../../components/Footer";

const Blog = ({ posts }) => {
  return (
    <>
      <Nav />
      <Categories widget={false} />
      <FeaturedPosts />
      <div className="px-12">
        {posts.map((post) => (
          <PostCard post={post.node} key={post.title} />
        ))}
      </div>
      <PostWidget />
      <Footer />
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
