import { createContext, useContext, useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useMount } from 'react-use';
import { io, Socket } from 'socket.io-client';
import { messageUtils } from '../utils/messageUtils';

type ChatContextType = {
   addMessage: (props: { message: string; userId: string }) => void;
   socket: Socket;
   viewMessages: boolean;
   setViewMessages: (viewMessages: boolean) => void;
   isLoading: boolean;
   setIsLoading: (isLoading: boolean) => void;
   joinChannel: (channelId: string) => void;
};

const ChatContext = createContext({} as ChatContextType);

type ChatContextProviderProps = {
   children: React.ReactNode;
   channelId: string;
};

const ChatContextProvider: React.FC<ChatContextProviderProps> = ({
   children,
   channelId
}) => {
   const socket = useMemo(
      () => io(process.env.API || 'http://localhost:3000'),
      []
   );

   const [viewMessages, setViewMessages] = useState(false);

   const [isLoading, setIsLoading] = useState(true);

   const { isBlank } = messageUtils;

   const client = useQueryClient();

   //!TODO refatorar
   useMount(() => {
      socket.on('new-message', () => {
         client.invalidateQueries('messages');
      });
   });

   const addMessage = ({
      message,
      userId
   }: {
      message: string;
      userId: string;
   }) => {
      if (isBlank(message)) return;
      const newMessage = {
         userId: +userId,
         text: message,
         channelId: +channelId
      };

      socket.emit('send-message', newMessage);
   };

   const joinChannel = (channelId: string) => {
      socket.emit('join', channelId);
   };

   const ChatValue: ChatContextType = {
      addMessage,
      socket,
      viewMessages,
      setViewMessages,
      isLoading,
      setIsLoading,
      joinChannel
   };

   return (
      <ChatContext.Provider value={ChatValue}>{children}</ChatContext.Provider>
   );
};

export const useChatContext = () => {
   const context = useContext(ChatContext);
   if (context === undefined) {
      throw new Error(
         'useChatContext must be used within a ChatContextProvider'
      );
   }
   return context;
};

export default ChatContextProvider;
