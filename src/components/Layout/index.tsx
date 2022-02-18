import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Loading from 'components/Loading';
import Messages from 'components/Messages';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { useChatContext } from 'contexts/ChatContext';
import { Grid } from './style';

const Layout = () => {
    const { isLoading } = useChatContext();
    if (isLoading) return <Loading />;
    return (
        <Grid>
            <ChannelHeader />
            <ChannelList />
            <OnlineUser />
            <Topbar />
            <Messages />
        </Grid>
    );
};

export default Layout;
