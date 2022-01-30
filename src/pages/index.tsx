import Login from 'components/Login';
import { useUserContext } from 'contexts/UserContext';
import Head from 'next/head';

const Home: React.FC = () => {
    const { logged } = useUserContext();
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
