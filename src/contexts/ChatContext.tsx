import { channelsData } from 'data/channels';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import { User } from './UserContext';

export type Message = {
    user: User;
    content: string;
    createdAt: Date;
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
};

const ChatContext = createContext({} as ChatContextType);

const ChatContextProvider: React.FC = ({ children }) => {
    const socket = useMemo(() => io('http://localhost:3000'), []);

    const [channels, setChannels] = useState<Channel[]>(channelsData);
    const [selectedChannel, setSelectedChannel] = useState<Channel>(
        channels[0]
    );
    const [messages, setMessages] = useState<Message[]>(
        selectedChannel.messages
    );

    useEffect(() => {
        socket.on('new-message', (message) => {
            setMessages((msgs) => [...msgs, message]);
        });

        setMessages(selectedChannel.messages);
    }, [socket, selectedChannel]);

    const addMessage = (message: string) => {
        if (!message || /^\s*$/.test(message)) return;

        const newMessage: Message = {
            // pegar do localStorage
            user: {
                id: 10,
                name: 'Pablo Winter',
                email: 'pablowinck123@gmail.com',
                profileImage: '/images/default-avatar.png',
                createdAt: new Date()
            },
            content: message,
            createdAt: new Date()
        };

        socket.emit('send-message', newMessage);
        setMessages([...messages, newMessage]);
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

    const getMessages = () => {
        return messages?.sort((a, b) => {
            if (a.createdAt > b.createdAt) return 1;
            if (a.createdAt < b.createdAt) return -1;

            return 0;
        });
    };

    const getMessagesByDate = (messages: Message[]) => {
        let currentDate = new Date();
        return messages.reduce((acc, message) => {
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
        onSelectChannel: onSelectChannel
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
