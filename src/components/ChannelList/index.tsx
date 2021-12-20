import Channel from 'model/Channel';
import ChannelItem from './ChannelItem';
import SearchBar from './SearchBar';
import { Channels, Container, Content } from './style';

interface props {
    channels: Channel[];
    setChannelSelected: (channel: Channel) => void;
}

const ChannelList: React.FC<props> = ({ channels, setChannelSelected }) => {
    return (
        <Container>
            <Content>
                <SearchBar />
                <Channels>
                    {channels.map((channel, index) => (
                        <ChannelItem
                            key={index}
                            channel={channel}
                            setChannelSelected={setChannelSelected}
                        />
                    ))}
                </Channels>
            </Content>
        </Container>
    );
};

export default ChannelList;
