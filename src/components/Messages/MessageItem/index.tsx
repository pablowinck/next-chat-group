import { Message } from 'model/Message';
import { Avatar, Container, Content, Header, Name, Text, Time } from './style';

const MessageItem = ({ message }: { message: Message }) => {
    return (
        <Container>
            <Avatar>
                <img src={message.user.profileImage} />
            </Avatar>
            <Content>
                <Header>
                    <Name>{message.user.name}</Name>
                    <Time>
                        {message.createdAt.toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </Time>
                </Header>
                <Text>{message.content}</Text>
            </Content>
        </Container>
    );
};

export default MessageItem;
