import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import ModalAdd from 'components/ModalAdd';
import ModalJoin from 'components/ModalJoin';
import ModalPassword from 'components/ModalPassword';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { useViewContext } from 'contexts/ViewContext';
import { useState } from 'react';
import { Grid } from './style';

const Layout = () => {
    const [viewModalPassword, setViewModalPassword] = useState(false);

    const [viewMessages, setViewMessages] = useState(false);

    const { isOpenAdd, isOpenJoin } = useViewContext();

    return (
        <Grid>
            <ChannelHeader />
            <ChannelList />
            <OnlineUser />
            <Topbar />
            <Messages
                setViewModalPassword={setViewModalPassword}
                setViewMessages={setViewMessages}
                viewMessages={viewMessages}
            />
            {viewModalPassword && (
                <ModalPassword
                    setViewMessages={setViewMessages}
                    setViewModalPassword={setViewModalPassword}
                />
            )}
            {isOpenAdd && <ModalAdd />}
            {isOpenJoin && <ModalJoin />}
        </Grid>
    );
};

export default Layout;
