import { useChatContext } from 'contexts/ChatContext';
import { useMenuContext } from 'contexts/MenuContext';
import { useState } from 'react';
import ChannelItem from './ChannelItem';
import SearchBar from './SearchBar';
import { Channels, Container, Content } from './style';

const ChannelList: React.FC = () => {
    const [filter, setFilter] = useState('');
    const { channels } = useChatContext();
    const { open } = useMenuContext();
    return (
        <Container>
            <Content>
                {open && <SearchBar setFilter={setFilter} />}
                <Channels>
                    {channels
                        .filter((channel) =>
                            channel.name
                                .toLowerCase()
                                .includes(filter.toLowerCase())
                        )
                        .map((channel, index) => {
                            return (
                                <ChannelItem key={index} channel={channel} />
                            );
                        })}
                </Channels>
            </Content>
        </Container>
    );
};

export default ChannelList;
