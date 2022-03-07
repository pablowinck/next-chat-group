import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useMount } from 'react-use';
import { io, Socket } from 'socket.io-client';
import { channelsApi } from '../api/channels';
import { messageUtils } from '../utils/messageUtils';
import { User } from './UserContext';
export type Message = {
    user: User;
    content: string;
    createdAt: Date;
};

export type ChannelForm = {
    id: number;
    name: string;
    topic: string;
    image: string;
    createdAt: string;
    isPrivate: boolean;
    password: string;
};

export type Channel = {
    id: number;
    name: string;
    topic: string;
    image: string;
    members: User[];
    messages: Message[];
    private: {
        isPrivate: boolean;
        password: string;
    };
    isSelected: boolean;
    hasNotifications: boolean;
};

type ChatContextType = {
    messages: Message[];
    messagesByDate: any[];
    channels: Channel[];
    selectedChannel: Channel;
    addMessage: (message: string) => void;
    addChannel: (channel: Channel) => void;
    onSelectChannel: (channel: Channel) => void;
    socket: Socket;
    loadMessages: () => void;
    joinChannel: (channelId: number) => void;
    viewMessages: boolean;
    setViewMessages: (viewMessages: boolean) => void;
    isLoading: boolean;
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

const ChatContextProvider: React.FC = ({ children }) => {
    const socket = useMemo(() => io('http://localhost:3000'), []);
    const [channelsData, setChannelsData] = useState<Channel[]>([
        loadingChannel
    ]);
    const [channels, setChannels] = useState<Channel[]>([]);
    const [selectedChannel, setSelectedChannel] =
        useState<Channel>(loadingChannel);
    const [messages, setMessages] = useState<Message[]>([]);

    const [viewMessages, setViewMessages] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { orderByCreatedAt, orderByDate, isBlank } = messageUtils;

    const { getByUser, createChannel, joinChannel } = channelsApi;

    async function getAllChannels() {
        setChannelsData(await getByUser());
    }

    useEffect(() => {
        setChannels(channelsData);
        setSelectedChannel(channelsData[0]);
    }, [channelsData]);

    useMount(async () => {
        await getAllChannels();
        socket.on('load-messages', (currentMessages) => {
            setMessages(currentMessages);
        });
        socket.on('new-message', (message) => {
            setMessages((msgs) => [...msgs, message]);
        });
        setIsLoading(false);
    });

    useEffect(() => {
        if (!selectedChannel) return;
        if (selectedChannel.private.isPrivate) return;
        loadMessages();
    }, [selectedChannel, socket]);

    const addMessage = (message: string) => {
        if (isBlank(message)) return;
        const user: User = JSON.parse(localStorage.getItem('user'));
        const newMessage = {
            userId: user.id,
            text: message,
            channelId: selectedChannel.id
        };

        console.log('[ChatContext] addMessage', newMessage);

        socket.emit('send-message', newMessage);
    };

    const addChannel = async (channel: Channel) => {
        const { id } = await createChannel(channel);
        await joinChannel(id);
        getAllChannels();
    };

    const onSelectChannel = (currentChannel: Channel) => {
        currentChannel.hasNotifications = false;

        let newChannels = channels.map((channel) => {
            channel.isSelected =
                channel.id === currentChannel.id ? true : false;

            return channel;
        });

        setChannels(newChannels);
        setSelectedChannel(currentChannel);
    };

    const loadMessages = () => {
        socket.emit('join', [selectedChannel.id, selectedChannel.topic]);
    };

    const ChatValue: ChatContextType = {
        messages: orderByCreatedAt(messages),
        messagesByDate: orderByDate(orderByCreatedAt(messages)),
        channels: channels,
        selectedChannel: selectedChannel,
        addMessage: addMessage,
        addChannel: addChannel,
        onSelectChannel: onSelectChannel,
        socket: socket,
        loadMessages: loadMessages,
        joinChannel: joinChannel,
        viewMessages,
        setViewMessages,
        isLoading: isLoading
    };

    return (
        <ChatContext.Provider value={ChatValue}>
            {children}
        </ChatContext.Provider>
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
