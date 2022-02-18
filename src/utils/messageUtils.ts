import { Message } from 'contexts/ChatContext';

export const messageUtils = {
    orderByCreatedAt: (messages: Message[]) => {
        if (!messages) return [];
        return messages.sort((a, b) => {
            if (a.createdAt > b.createdAt) return 1;
            if (a.createdAt < b.createdAt) return -1;

            return 0;
        });
    },
    orderByDate: (messages: Message[]) => {
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
    },
    orderByUser: (currentMessages: any[]) => {
        if (currentMessages.length < 1) return [];

        return currentMessages.reduce((acc, message) => {
            if (acc.length < 1 || message.type === 'date') {
                acc.push(message);
                return acc;
            }

            if (message.user.id === acc[acc.length - 1]?.user?.id) {
                acc[acc.length - 1].content += '\n' + message.content;
                return acc;
            }
            acc.push(message);
            return acc;
        }, []);
    },
    isBlank: (message: string) => {
        return !message || /^\s*$/.test(message);
    }
};
