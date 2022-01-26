import {
  Header,
  Email,
  FeaturedPosts,
  Categories,
  PostWidget,
  Footer,
} from "../components/";

const Home = () => {
  return (
    <div className="relative top-0">
      <section className="block md:flex flex-row">
        <div
          className="h-w-screen md:w-1/2 md:h-screen bg-email bg-cover bg-center sticky web-sticky 
        top-0 -z-10 px-8 flex justify-center items-center"
        >
          <img src={"/images/ff-banner-white-medium.png"} />
        </div>
        <div className="w-full md:w-1/2 p-8 bg-stone-200">
          <Header />
          <PostWidget />
          <Categories />
          <Email />
        </div>
      </section>

      <section className="block md:flex flex-row w-full">
        <div className="w-full">
          <FeaturedPosts />
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;
