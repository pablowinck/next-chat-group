import { Channel } from 'hooks/useChannels';
import { Message } from 'hooks/useMessages';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';
import { io, Socket } from 'socket.io-client';
import { messageUtils } from '../utils/messageUtils';

type ChatContextType = {
   selectedChannel: Channel;
   addMessage: (message: string) => void;
   onSelectChannel: (channel: Channel) => void;
   socket: Socket;
   viewMessages: boolean;
   setViewMessages: (viewMessages: boolean) => void;
   isLoading: boolean;
   setIsLoading: (isLoading: boolean) => void;
};

const loadingChannel = {
   id: 0,
   name: 'LOADING',
   topic: 'Loading...',
   image: '',
   members: [],
   messages: [],
   private: {
      isPrivate: false,
      password: ''
   },
   isSelected: true,
   hasNotifications: false
};

const ChatContext = createContext({} as ChatContextType);

type ChatContextProviderProps = {
   children: React.ReactNode;
   userId: number;
};

const ChatContextProvider: React.FC<ChatContextProviderProps> = ({
   children,
   userId
}) => {
   const socket = useMemo(() => io('http://localhost:3000'), []);

   const [selectedChannel, setSelectedChannel] =
      useState<Channel>(loadingChannel);

   const [viewMessages, setViewMessages] = useState(false);

   const [isLoading, setIsLoading] = useState(true);

   const { isBlank } = messageUtils;

   const { setQueryData, getQueryData } = useQueryClient();

   useEffect(() => {
      socket.on('new-message', (message) => {
         const messages = getQueryData<Message[]>(['messages', userId]);
         setQueryData(['messages', userId], [...messages, message]);
      });
   }, [userId, setQueryData, getQueryData, socket]);

   const addMessage = (message: string) => {
      if (isBlank(message)) return;
      const newMessage = {
         userId: userId,
         text: message,
         channelId: selectedChannel.id
      };

      socket.emit('send-message', newMessage);
   };

   //!TODO select channel by router
   const onSelectChannel = (currentChannel: Channel) => {
      // const channels = getQueryData<Channel[]>(['channels', userId]);
      // currentChannel.hasNotifications = false;
      // let newChannels = channels.map((channel) => {
      //    channel.isSelected = channel.id === currentChannel.id ? true : false;
      //    return channel;
      // });
      // setQueryData(['channels', userId], newChannels);
      // setSelectedChannel(currentChannel);
      // !TODO get messages
   };

   const ChatValue: ChatContextType = {
      selectedChannel: selectedChannel,
      addMessage: addMessage,
      onSelectChannel: onSelectChannel,
      socket: socket,
      viewMessages,
      setViewMessages,
      isLoading: isLoading,
      setIsLoading: setIsLoading
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
