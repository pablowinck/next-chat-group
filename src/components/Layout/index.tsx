import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import Messages from 'components/Messages';
import MobileMenu from 'components/MobileMenu';
import OnlineUser from 'components/OnlineUser';
import Topbar from 'components/Topbar';
import { useChatContext } from 'contexts/ChatContext';
import { useMenuContext } from 'contexts/MenuContext';
import { useEffect, useState } from 'react';
import { ButtonMobileMenu, Grid, MenuIcon } from './style';

const Layout = ({ channelId }) => {
   const { open } = useMenuContext();
   const { socket } = useChatContext();

   const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
   const [windowWidth, setWindowWidth] = useState(1080);
   useEffect(() => {
      socket.emit('join', channelId);
   }, [channelId, socket]);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <Grid menuIsOpen={open}>
         {mobileMenuOpened && windowWidth < 768 && (
            <MobileMenu setOpen={setMobileMenuOpened} />
         )}
         {windowWidth > 768 && <ChannelHeader />}
         {windowWidth > 768 && <ChannelList />}
         {windowWidth > 768 && <OnlineUser />}
         <Topbar channelId={channelId} />
         <Messages channelId={channelId} />
         <ButtonMobileMenu
            onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
         >
            <MenuIcon />
         </ButtonMobileMenu>
      </Grid>
   );
};

export default Layout;
