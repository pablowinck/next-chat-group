import { Message } from 'model/Message';
import { FC, useEffect } from 'react';
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
    messages: Message[];
    isPrivateChannel: boolean;
    setViewModalPassword: (isViewModalPassword: boolean) => void;
    viewMessages: boolean;
    setViewMessages: (isViewMessages: boolean) => void;
}

const Messages: FC<IProps> = ({
    messages,
    isPrivateChannel,
    setViewModalPassword,
    viewMessages,
    setViewMessages
}) => {
    let currentDate = new Date();

    const getMessagesByDate = (messages: Message[]) =>
        messages.reduce((acc, message) => {
            const date = new Date(message.createdAt);

            if (date.toDateString() !== currentDate.toDateString()) {
                acc.push({ type: 'date', date });
                currentDate = date;
            }

            acc.push(message);

            return acc;
        }, []);

    useEffect(() => {
        setViewModalPassword(isPrivateChannel);
        setViewMessages(!isPrivateChannel);
    }, [isPrivateChannel, setViewModalPassword, setViewMessages]);

    return (
        <Container>
            <Content>
                {viewMessages &&
                    getMessagesByDate(messages).map((message, index) => {
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

            <TypeInput>
                <input type="text" placeholder="Type a message here" />
                <SendButton>
                    <SendIcon />
                </SendButton>
            </TypeInput>
        </Container>
    );
};

export default Messages;
