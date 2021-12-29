import { Message } from 'contexts/ChatContext';

export const messagesData: Message[] = [
    {
        id: 1,
        channelId: 1,
        user: {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            profileImage: '/images/default-avatar.png',
            createdAt: new Date()
        },
        content: 'Hello, how are you?',
        createdAt: new Date()
    },
    {
        id: 2,
        channelId: 1,
        user: {
            id: 2,
            name: 'Pablo Winter',
            email: 'pablo@gmail.com',
            profileImage: '/images/default-avatar.png',
            createdAt: new Date()
        },
        content: 'Hi, i am fine, and you?',
        createdAt: new Date()
    },
    {
        id: 3,
        channelId: 1,
        user: {
            id: 2,
            name: 'Pablo Winter',
            email: 'pablo@gmail.com',
            profileImage: '/images/default-avatar.png',
            createdAt: new Date()
        },
        content: 'Hi, i am fine, and you?',
        createdAt: new Date('2020-01-01')
    },
    {
        id: 4,
        channelId: 2,
        user: {
            id: 2,
            name: 'Pablo Winter',
            email: 'pablo@gmail.com',
            profileImage: '/images/default-avatar.png',
            createdAt: new Date()
        },
        content: 'A simple test message',
        createdAt: new Date('2016-01-01')
    }
];
