import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from 'next/head'
import Header from '../components/Header'

export default function Profile() {
    const { user } = useUser();

    return (
        <div className="">
            <Head>
                <title>Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            {user && (
                <div>
                    <p className="text-lg">Name: {user.name} </p>
                    <p className="text-lg">Email: {user.email} </p>
                </div>
            )}
        </div>
    );
}

export const getServerSideProps = withPageAuthRequired();