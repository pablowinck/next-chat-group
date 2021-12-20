import { Message } from 'model/Message';
import MessageItem from './MessageItem';
import {
    Container,
    Content,
    DateSeparator,
    SendButton,
    SendIcon,
    TypeInput
} from './style';

const Messages = ({ messages }: { messages: Message[] }) => {
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
    return (
        <Container>
            <Content>
                {getMessagesByDate(messages).map((message, index) => {
                    if (message?.type === 'date') {
                        return (
                            <DateSeparator>
                                <span>
                                    {message.date.toLocaleDateString('pt-BR') ==
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
