import Layout from 'components/Layout';
import ChatContextProvider from 'contexts/ChatContext';
import ViewContextProvider from 'contexts/ViewContext';
import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Chat Group</title>
            </Head>
            <ViewContextProvider>
                <ChatContextProvider>
                    <Layout />
                </ChatContextProvider>
            </ViewContextProvider>
        </>
    );
};

export default Home;
