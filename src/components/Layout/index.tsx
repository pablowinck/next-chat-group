import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import ModalPassword from 'components/ModalPassword';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { useViewContext } from 'contexts/ViewContext';
import { Grid } from './style';

const Layout = () => {
    const { viewPassword } = useViewContext();

    return (
        <Grid>
            <ChannelHeader />
            <ChannelList />
            <OnlineUser />
            <Topbar />
            <Messages />
            {viewPassword && <ModalPassword />}
        </Grid>
    );
};

export default Layout;
