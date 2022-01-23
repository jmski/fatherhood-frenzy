import Preview from "../components/Preview";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import NavBar from "../components/sections/Nav";
import Social from "../components/sections/Social";
import Search from "../components/sections/Search";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Social />
      {/* <Preview /> */}
      <Main />
      <Search />
      <Footer />
    </>
  );
};

export default Home;
