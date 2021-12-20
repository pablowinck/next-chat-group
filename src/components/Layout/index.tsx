import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { channelsData } from 'data/channels';
import { messagesData } from 'data/messages';
import { useState } from 'react';
import { Grid } from './style';

const Layout = () => {
    const channels = channelsData;

    const [channelSelected, setChannelSelected] = useState(channels[0]);

    return (
        <Grid>
            <ChannelHeader />
            <ChannelList channels={channels} />
            <OnlineUser />
            <Topbar topic={channelSelected.topic} />
            <Messages messages={messagesData} />
        </Grid>
    );
};

export default Layout;
