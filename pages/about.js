import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <p>About page</p>
        </div>
    )
}