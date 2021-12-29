import { useChatContext } from 'contexts/ChatContext';
import { createRef, FC, useEffect, useState } from 'react';
import MessageItem from './MessageItem';
import {
    Container,
    Content,
    DateSeparator,
    SendButton,
    SendIcon,
    TypeInput
} from './style';

interface IProps {
    setViewModalPassword: (isViewModalPassword: boolean) => void;
    viewMessages: boolean;
    setViewMessages: (isViewMessages: boolean) => void;
}

const Messages: FC<IProps> = ({
    setViewModalPassword,
    viewMessages,
    setViewMessages
}) => {
    const [message, setMessage] = useState('');
    const { selectedChannel, messagesByDate, addMessage, messages } =
        useChatContext();

    const isPrivateChannel = selectedChannel.private?.isPrivate;

    const messageInput = createRef<HTMLInputElement>();
    useEffect(() => {
        setViewModalPassword(isPrivateChannel);
        setViewMessages(!isPrivateChannel);
    }, [isPrivateChannel, setViewModalPassword, setViewMessages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            id: messages.length + 1,
            channelId: selectedChannel.id,
            user: {
                id: 10,
                name: 'Pablo Winter',
                email: 'pablowinck123@gmail.com',
                profileImage: '/images/default-avatar.png',
                createdAt: new Date()
            },
            content: message,
            createdAt: new Date()
        });
        setMessage('');
        messageInput.current?.focus();
    };

    return (
        <Container>
            <Content>
                {viewMessages &&
                    messagesByDate.map((message, index) => {
                        if (message?.type === 'date') {
                            return (
                                <DateSeparator key={index}>
                                    <span>
                                        {message.date.toLocaleDateString(
                                            'pt-BR'
                                        ) ==
                                        new Date().toLocaleDateString('pt-BR')
                                            ? 'HOJE'
                                            : message.date.toLocaleDateString(
                                                  'pt-BR'
                                              )}
                                    </span>
                                </DateSeparator>
                            );
                        } else {
                            return (
                                <div key={index}>
                                    <MessageItem message={message} />
                                </div>
                            );
                        }
                    })}
            </Content>

            <TypeInput onSubmit={(e) => handleSubmit(e)}>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder="Type a message here"
                    autoFocus
                    ref={messageInput}
                />
                <SendButton type="submit">
                    <SendIcon />
                </SendButton>
            </TypeInput>
        </Container>
    );
};

export default Messages;
