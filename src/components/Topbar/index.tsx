import { FC } from 'react';
import { ChannelId, Container, Text } from './style';

interface IProps {
    topic: string;
    id: number;
}

const Topbar: FC<IProps> = ({ topic, id }) => {
    return (
        <Container>
            <Text>{topic}</Text>
            <ChannelId>#{id}</ChannelId>
        </Container>
    );
};

export default Topbar;
