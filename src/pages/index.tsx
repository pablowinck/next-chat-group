import Layout from 'components/Layout';
import Login from 'components/Login';
import ChatContextProvider from 'contexts/ChatContext';
import { useUserContext } from 'contexts/UserContext';
import ViewContextProvider from 'contexts/ViewContext';
import Head from 'next/head';

const Home: React.FC = () => {
    const { logged } = useUserContext();
    return (
        <>
            <Head>
                <title>Chat Group</title>
            </Head>

            <ViewContextProvider>
                <ChatContextProvider>
                    {logged ? <Layout /> : <Login />}
                </ChatContextProvider>
            </ViewContextProvider>
        </>
    );
};

export default Home;
