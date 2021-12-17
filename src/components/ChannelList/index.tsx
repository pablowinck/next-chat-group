import Channel from 'model/Channel';
import ChannelItem from './ChannelItem';
import SearchBar from './SearchBar';
import { Channels, Container, Content } from './style';

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
