import Head from 'next/head'
import Layout from '../components/Layout'
import Cta from '../components/Cta'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>My Auth0 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout >
        <Cta />
      </Layout>
    </div>
  )
}
