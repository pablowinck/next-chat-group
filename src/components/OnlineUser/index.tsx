import { Avatar, Container, MoreIcon } from './style';

const OnlineUser = () => {
    return (
        <Container>
            <Avatar>
                <img src="/images/default-avatar.png" alt="" />
            </Avatar>
            <span>Pablo Winter</span>
            <MoreIcon />
        </Container>
    );
};

export default OnlineUser;
