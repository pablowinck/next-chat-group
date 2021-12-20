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
    return (
        <Container>
            <DateSeparator>
                {' '}
                <span>yesterday</span>{' '}
            </DateSeparator>
            <Content>
                {messages.map((message, index) => (
                    <>
                        <div key={index}>
                            <MessageItem message={message} />
                        </div>
                    </>
                ))}
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
