import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fatherhood Frenzy</title>
        <meta name="description" content="Fatherhood Frenzy - slogan here" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NavBar/>
    </>
  )
}
