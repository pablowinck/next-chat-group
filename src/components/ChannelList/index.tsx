import Channel from 'model/Channel';
import { useState } from 'react';
import ChannelItem from './ChannelItem';
import SearchBar from './SearchBar';
import { Channels, Container, Content } from './style';

interface props {
    channels: Channel[];
    setChannelSelected: (channel: Channel) => void;
}

const ChannelList: React.FC<props> = ({ channels, setChannelSelected }) => {
    const [filter, setFilter] = useState('');

    return (
        <Container>
            <Content>
                <SearchBar setFilter={setFilter} />
                <Channels>
                    {channels
                        .filter((channel) =>
                            channel.name
                                .toLowerCase()
                                .includes(filter.toLowerCase())
                        )
                        .map((channel, index) => (
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
