import Head from 'next/head'
import AboutSection from '../components/AboutSection'
import Layout from '../components/Layout'

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout >
                <AboutSection />
            </Layout>
        </div>
    )
}