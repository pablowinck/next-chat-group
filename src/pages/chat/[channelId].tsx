import Layout from 'components/Layout';
import Loading from 'components/Loading';
import ChatContextProvider from 'contexts/ChatContext';
import { useUserContext } from 'contexts/UserContext';
import Head from 'next/head';
import React from 'react';

type Props = {
   channelId: string;
};

const Chat: React.FC<Props> = ({ channelId }) => {
   const { user } = useUserContext();

   if (!user?.id) return <Loading />;
   return (
      <>
         <Head>
            <title>Chat Group</title>
         </Head>

         <ChatContextProvider channelId={channelId}>
            <Layout channelId={channelId} />
         </ChatContextProvider>
      </>
   );
};

export default Chat;

export async function getServerSideProps(context) {
   const { channelId } = context.query;
   return {
      props: { channelId: channelId as string }
   };
}
