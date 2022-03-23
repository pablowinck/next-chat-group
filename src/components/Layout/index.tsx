import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { useChatContext } from 'contexts/ChatContext';
import { useMenuContext } from 'contexts/MenuContext';
import { useEffect } from 'react';
import { Grid } from './style';

const Layout = ({ channelId }) => {
   const { open } = useMenuContext();
   const { socket } = useChatContext();

   useEffect(() => {
      socket.emit('join', channelId);
   }, [channelId, socket]);

   return (
      <Grid menuIsOpen={open}>
         <ChannelHeader />
         <ChannelList />
         <OnlineUser />
         <Topbar channelId={channelId} />
         <Messages channelId={channelId} />
      </Grid>
   );
};

export default Layout;
