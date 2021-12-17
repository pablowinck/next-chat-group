import Channel from 'model/Channel';
import ChannelItem from './ChannelItem';
import { Channels, Container, Content, SearchBar } from './style';

const ChannelList: React.FC<{ channels: Channel[] }> = ({ channels }) => {
    return (
        <Container>
            <Content>
                <SearchBar />
                <Channels>
                    {channels.map((channel) => (
                        <ChannelItem key={channel.id} channel={channel} />
                    ))}
                </Channels>
            </Content>
        </Container>
    );
};

export default ChannelList;
