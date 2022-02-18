import Layout from 'components/Layout';
import ChatContextProvider from 'contexts/ChatContext';
import { useUserContext } from 'contexts/UserContext';
import Head from 'next/head';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const Chat: React.FC = () => {
    const { logged } = useUserContext();
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
                staleTime: 60 * 1000 // 1 min
            }
        }
    });
    return (
        <>
            <Head>
                <title>Chat Group</title>
            </Head>
            <QueryClientProvider client={queryClient}>
                <ChatContextProvider>
                    {logged ? <Layout /> : <h1>403 forbbidden</h1>}
                </ChatContextProvider>
            </QueryClientProvider>
        </>
    );
};

export default Chat;
