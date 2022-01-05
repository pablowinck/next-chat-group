import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import ModalAdd from 'components/ModalAdd';
import ModalJoin from 'components/ModalJoin';
import ModalPassword from 'components/ModalPassword';
import OnlineUser from 'components/OnlineUser';
import Settings from 'components/Settings';
import Topbar from 'components/Topbar';
import { useViewContext } from 'contexts/ViewContext';
import { Grid } from './style';

const Layout = () => {
    const { isOpenAdd, isOpenJoin, viewPassword, viewSettings } =
        useViewContext();

    return (
        <Grid>
            <ChannelHeader />
            <ChannelList />
            <OnlineUser />
            <Topbar />
            <Messages />
            {viewPassword && <ModalPassword />}
            {isOpenAdd && <ModalAdd />}
            {isOpenJoin && <ModalJoin />}
            {viewSettings !== '' && <Settings />}
        </Grid>
    );
};

export default Layout;
