import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from 'next/head'
import Layout from '../components/Layout'
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
    const { user } = useUser();

    return (
        <div className="">
            <Head>
                <title>Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout >
                {user && (
                    <div>
                        <ProfileCard user={user} />
                    </div>
                )}

            </Layout>


        </div>
    );
}

export const getServerSideProps = withPageAuthRequired();