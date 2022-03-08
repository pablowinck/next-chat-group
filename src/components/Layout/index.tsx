import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Loading from 'components/Loading';
import Messages from 'components/Messages';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { useChatContext } from 'contexts/ChatContext';
import { useMenuContext } from 'contexts/MenuContext';
import { useUserContext } from 'contexts/UserContext';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import api from 'utils/api';
import { Grid } from './style';

const Layout = () => {
   const { setChannels, setMessages, setIsLoading } = useChatContext();
   const { open } = useMenuContext();
   const { user } = useUserContext();
   const { isLoading } = useQuery('load-all-' + user.id, () =>
      api.get('/channels/all/' + user.id).then((res) => {
         console.log('getAll', res.data);
         const { channels, messages } = res.data;
         setChannels(channels);
         setMessages(messages);
      })
   );

   useEffect(() => {
      setIsLoading(isLoading);
   }, [isLoading, setIsLoading]);

   if (isLoading) return <Loading />;

   // return <h1>passou</h1>;
   return (
      <Grid menuIsOpen={open}>
         <ChannelHeader />
         <ChannelList />
         <OnlineUser />
         <Topbar />
         <Messages />
      </Grid>
   );
};

export default Layout;
