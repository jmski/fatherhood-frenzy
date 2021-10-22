import Head from 'next/head'
import LandingPage from '../components/LandingPage'
import NavBar from '../components/NavBar'

const Home = () => {

  return (
    <>
      <Head>
        <title>Fatherhood Frenzy</title>
        <meta name="description" content="Fatherhood Frenzy - slogan here" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NavBar/>
      <LandingPage/>
    </>
  )
}

export default Home;
