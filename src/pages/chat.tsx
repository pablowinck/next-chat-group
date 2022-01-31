import Layout from 'components/Layout';
import ChatContextProvider from 'contexts/ChatContext';
import { useUserContext } from 'contexts/UserContext';
import Head from 'next/head';
import React from 'react';

const Chat: React.FC = () => {
    const { logged } = useUserContext();
    return (
        <>
            <Head>
                <title>Chat Group</title>
            </Head>
            <ChatContextProvider>
                {logged ? <Layout /> : <h1>403 forbbidden</h1>}
            </ChatContextProvider>
        </>
    );
};

export default Chat;
