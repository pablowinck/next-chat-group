import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { useMenuContext } from 'contexts/MenuContext';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Grid } from './style';

const Layout = ({ channelId }) => {
   const { open } = useMenuContext();

   return (
      <Grid menuIsOpen={open}>
         <ChannelHeader />
         <ChannelList />
         <OnlineUser />
         <Topbar />
         <Messages channelId={channelId} />
         <ReactQueryDevtools />
      </Grid>
   );
};

export default Layout;
