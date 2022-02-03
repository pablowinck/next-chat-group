import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useMount } from 'react-use';
import { io, Socket } from 'socket.io-client';
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

    async function getChannels() {
        let currentChannels;
        const user = JSON.parse(localStorage.getItem('user'));
        await axios
            .get('http://localhost:3000/channels/members/' + user.id)
            .then((res) => (currentChannels = res.data))
            .catch((err) => console.log(err));
        currentChannels = currentChannels
            .map((channel) => {
                console.log('currentChannel ', channel);

                return {
                    id: channel.id,
                    name: channel.name,
                    topic: channel.topic,
                    image: channel.image,
                    members: [],
                    messages: [],
                    createdAt: channel.createdAt,
                    private: {
                        isPrivate: channel.isPrivate,
                        password: channel.password
                    },
                    isSelected: false,
                    hasNotifications: false
                };
            })
            .sort((a, b) => {
                if (a.createdAt > b.createdAt) return 1;
                if (a.createdAt < b.createdAt) return -1;
            });
        currentChannels[0].isSelected = true;
        setChannelsData(currentChannels);
    }

    useEffect(() => {
        setChannels(channelsData);
        setSelectedChannel(channelsData[0]);
    }, [channelsData]);

    useMount(async () => {
        getChannels();
        socket.on('load-messages', (currentMessages) => {
            console.log('[ChatContext] join-messages', currentMessages);

            setMessages(currentMessages);
        });
        socket.on('new-message', (message) => {
            console.log('[ChatContext] new-message', message);

            setMessages((msgs) => [...msgs, message]);
        });
    });

    useEffect(() => {
        if (!selectedChannel) return;
        if (selectedChannel.private.isPrivate) return;
        loadMessages();
    }, [selectedChannel, socket]);

    const addMessage = (message: string) => {
        if (!message || /^\s*$/.test(message)) return;
        const user: User = JSON.parse(localStorage.getItem('user'));
        const newMessage = {
            // pegar do localStorage
            userId: user.id,
            text: message,
            channelId: selectedChannel.id
        };

        console.log('[ChatContext] addMessage', newMessage);

        socket.emit('send-message', newMessage);
    };

    const joinChannel = async (channelId: number) => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log('my user', user);
        await axios
            .get(
                'http://localhost:3000/channels/' +
                    channelId +
                    '/add-member/' +
                    user.id
            )
            .then(() => {
                getChannels();
            });
    };

    const addChannel = (channel: Channel) => {
        setChannels([...channels, channel]);
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

    const getMessages = () => {
        if (!messages) return [];
        return messages.sort((a, b) => {
            if (a.createdAt > b.createdAt) return 1;
            if (a.createdAt < b.createdAt) return -1;

            return 0;
        });
    };

    const getMessagesByDate = (currentMessages: Message[]) => {
        let currentDate = new Date();
        return currentMessages.reduce((acc, message) => {
            const date = new Date(message.createdAt);

            if (date.toDateString() !== currentDate.toDateString()) {
                acc.push({ type: 'date', date });
                currentDate = date;
            }

            acc.push(message);

            return acc;
        }, []);
    };

    const ChatValue: ChatContextType = {
        messages: getMessages(),
        messagesByDate: getMessagesByDate(getMessages()),
        channels: channels,
        selectedChannel: selectedChannel,
        addMessage: addMessage,
        addChannel: addChannel,
        onSelectChannel: onSelectChannel,
        socket: socket,
        loadMessages: loadMessages,
        joinChannel: joinChannel,
        viewMessages,
        setViewMessages
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
