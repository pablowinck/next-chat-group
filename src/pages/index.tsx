import Layout from 'components/Layout';
import ChatContextProvider from 'contexts/ChatContext';
import { useThemeContext } from 'contexts/ThemeContext';
import ViewContextProvider from 'contexts/ViewContext';
import Head from 'next/head';

const Home: React.FC = () => {
    const { selectedTheme, themes } = useThemeContext();
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
