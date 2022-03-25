import ChannelHeader from 'components/ChannelHeader';
import ChannelList from 'components/ChannelList';
import OnlineUser from 'components/OnlineUser';
import { Container, Overlay } from './styles';

type Props = {
   setOpen: (value: boolean) => void;
};

const MobileMenu: React.FC<Props> = ({ setOpen }) => {
   return (
      <>
         <Container
            initial={{
               x: -100
            }}
            animate={{
               x: 0
            }}
            transition={{
               duration: 0.4
            }}
         >
            <ChannelHeader />
            <ChannelList />
            <OnlineUser />
         </Container>
         <Overlay
            initial={{
               opacity: 0
            }}
            animate={{
               opacity: 1
            }}
            transition={{
               duration: 0.4
            }}
            onClick={() => setOpen(false)}
         />
      </>
   );
};

export default MobileMenu;
