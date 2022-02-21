import Login from 'components/Login';
import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Chat Group</title>
            </Head>
            <Login />
        </>
    );
};

export default Home;
