import { channelsData } from 'data/channels';
import { messagesData } from 'data/messages';
import { createContext, useContext, useState } from 'react';

export type Message = {
    id: number;
    channelId: number;
    user: {
        id: number;
        name: string;
        email: string;
        profileImage: string;
        createdAt: Date;
    };
    content: string;
    createdAt: Date;
};

export type Channel = {
    id: number;
    name: string;
    topic: string;
    image: string;
    members: [];
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
    addMessage: (message: Message) => void;
    addChannel: (channel: Channel) => void;
    onSelectChannel: (channel: Channel) => void;
};

const ChatContext = createContext({} as ChatContextType);

const ChatContextProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>(messagesData);
    const [channels, setChannels] = useState<Channel[]>(channelsData);
    const [selectedChannel, setSelectedChannel] = useState<Channel>(
        channels[0]
    );

    const addMessage = (message: Message) => {
        if (!message.content || /^\s*$/.test(message.content)) return;
        setMessages([...messages, message]);
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
        return messages
            .filter((message) => message.channelId === selectedChannel.id)
            .sort((a, b) => {
                if (a.createdAt > b.createdAt) return 1;
                if (a.createdAt < b.createdAt) return -1;

                if (a.id > b.id) return 1;
                if (a.id < b.id) return -1;

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
