import { Message } from 'contexts/ChatContext';
import Image from 'next/image';
import { Avatar, Container, Content, Header, Name, Text, Time } from './style';

const MessageItem = ({ message }: { message: Message }) => {
    return (
        <Container>
            <Avatar>
                <Image
                    src={
                        message?.user?.profileImage
                            ? message.user?.profileImage
                            : '/images/default-avatar.png'
                    }
                    alt="Avatar"
                    layout="intrinsic"
                    width={'100%'}
                    height={'100%'}
                    draggable={false}
                />
            </Avatar>
            <Content>
                <Header>
                    <Name>{message.user?.name}</Name>
                    <Time>
                        {message?.createdAt?.toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </Time>
                </Header>
                <Text>{message?.content}</Text>
            </Content>
        </Container>
    );
};

export default MessageItem;
