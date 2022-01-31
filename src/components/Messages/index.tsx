import ModalPassword from 'components/ModalPassword';
import { useChatContext } from 'contexts/ChatContext';
import { useEffect, useRef, useState } from 'react';
import MessageItem from './MessageItem';
import {
    Container,
    Content,
    DateSeparator,
    SendButton,
    SendIcon,
    TypeInput
} from './style';

const Messages = () => {
    const [message, setMessage] = useState('');
    const { selectedChannel, messagesByDate, addMessage } = useChatContext();

    const [openPassword, setOpenPassword] = useState(false);
    const [viewMessages, setViewMessages] = useState(false);

    const messageInput = useRef<HTMLInputElement>();

    useEffect(() => {
        setOpenPassword(selectedChannel?.private?.isPrivate);
        setViewMessages(!selectedChannel?.private?.isPrivate);
    }, [selectedChannel]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addMessage(message);
        setMessage('');
        messageInput.current.focus();
    };

    const scrollBottom = (e: React.SyntheticEvent) => {
        e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
    };

    return (
        <>
            <Container>
                <Content onLoad={scrollBottom}>
                    {viewMessages &&
                        messagesByDate.map((message, index) => {
                            if (message?.type === 'date') {
                                return (
                                    <DateSeparator key={index}>
                                        <span>
                                            {message.date.toLocaleDateString(
                                                'pt-BR'
                                            ) ==
                                            new Date().toLocaleDateString(
                                                'pt-BR'
                                            )
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

                <TypeInput onSubmit={handleSubmit}>
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

            <ModalPassword
                open={openPassword}
                onOpenChange={setOpenPassword}
                onViewMessagesChange={setViewMessages}
            />
        </>
    );
};

export default Messages;
