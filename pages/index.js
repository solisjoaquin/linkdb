import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Cta from '../components/Cta'
import Banner from '../components/Banner'

export default function Home() {
  const [displayBanner, setDisplayBanner] = useState(true)

  return (
    <div className="">
      <Head>
        <title>My Auth0 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {displayBanner ?
        <Banner setDisplayBanner={setDisplayBanner} />
        : null}
      <Layout >
        <Cta />
      </Layout>
    </div>
  )
}
