import { useChatContext } from 'contexts/ChatContext';
import { FC } from 'react';
import { ChannelId, Container, Text } from './style';

const Topbar: FC = () => {
    const { selectedChannel } = useChatContext();

    return (
        <Container>
            <Text>{selectedChannel.topic}</Text>
            <ChannelId>#{selectedChannel.id}</ChannelId>
        </Container>
    );
};

export default Topbar;
