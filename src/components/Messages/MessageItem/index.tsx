import { Message } from 'contexts/ChatContext';
import { useUserContext } from 'contexts/UserContext';
import Image from 'next/image';
import { Avatar, Container, Content, Header, Name, Text, Time } from './style';

const MessageItem = ({ message }: { message: Message }) => {
    const {user} = useUserContext();
    const isLoggedUser = user?.id === message.user.id;
    return (
        <Container isLoggedUser={isLoggedUser}>
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
                <Header isLoggedUser={isLoggedUser}>
                    <Name>{message.user?.name}</Name>
                    <Time>
                        {new Date(message?.createdAt)?.toLocaleTimeString(
                            'pt-BR',
                            {
                                hour: '2-digit',
                                minute: '2-digit'
                            }
                        )}
                    </Time>
                </Header>
                <Text isLoggedUser={isLoggedUser}>{message?.content}</Text>
            </Content>
        </Container>
    );
};

export default MessageItem;
