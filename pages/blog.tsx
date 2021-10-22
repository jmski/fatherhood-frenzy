import Head from "next/head";
import NavBar from "../components/NavBar";


const Blog = () => {
  return (
    <>
      <Head>
        <title>Fatherhood Frenzy</title>
        <meta name="description" content="Fatherhood Frenzy - slogan here" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NavBar/>
      <div className=" h-40 md:h-80 flex flex-col justify-center items-center">
        <h3 className="text-white text-1xl md:text-3xl">Blog</h3>
        <h1 className="text-white text-3xl md:text-5xl">Under construction</h1>
      </div>
    </>
  )
}

export default Blog;