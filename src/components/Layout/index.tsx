import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { channelsData } from 'data/channels';
import { messagesData } from 'data/messages';
import Channel from 'model/Channel';
import { useState } from 'react';
import { Grid } from './style';

const Layout = () => {
    const [channels, setChannels] = useState(channelsData);

    const [channelSelected, setChannelSelected] = useState(channels[0]);

    const messages = messagesData;

    const handleSelectChannel = (currentChannel: Channel) => {
        setChannelSelected(currentChannel);

        let newChannels = channels.map((channel) => {
            channel.isSelected =
                channel.id === currentChannel.id ? true : false;

            return channel;
        });

        setChannels(newChannels);
    };

    const getSelectedMessages = () => {
        return messages
            .filter((message) => message.channelId === channelSelected.id)
            .sort((a, b) => {
                if (a.createdAt > b.createdAt) return 1;
                if (a.createdAt < b.createdAt) return -1;

                if (a.id > b.id) return 1;
                if (a.id < b.id) return -1;

                return 0;
            });
    };

    return (
        <Grid>
            <ChannelHeader setChannels={setChannels} channels={channels} />
            <ChannelList
                channels={channels}
                setChannelSelected={handleSelectChannel}
            />
            <OnlineUser />
            <Topbar topic={channelSelected.topic} id={channelSelected.id} />
            <Messages messages={getSelectedMessages()} />
        </Grid>
    );
};

export default Layout;
