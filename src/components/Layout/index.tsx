import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { Grid } from './style';

const Layout = () => {
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
