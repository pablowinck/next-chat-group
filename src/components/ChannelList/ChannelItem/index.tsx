import { useChatContext } from 'contexts/ChatContext';
import { useMenuContext } from 'contexts/MenuContext';
import { Channel } from 'hooks/useChannels';
import Image from 'next/image';
import Link from 'next/link';
import { ChannelAvatar, Container, Content, PrivateIcon } from './style';

interface props {
   channel: Channel;
}

const ChannelItem: React.FC<props> = ({ channel }) => {
   const { joinChannel } = useChatContext();
   const { open } = useMenuContext();

   return (
      <Container onClick={() => joinChannel(`${channel.id}`)}>
         {/* eslint-disable-next-line @next/next/link-passhref */}
         <Link href={`/chat/${channel.id}`}>
            <Content
               // onClick={() => onSelectChannel(channel)}
               className={channel.isSelected && open && 'selected'}
               isMenuOpen={open}
            >
               <ChannelAvatar
                  hasNotifications={channel.hasNotifications}
                  isMenuOpen={open}
               >
                  <Image
                     src={
                        channel.image
                           ? channel.image
                           : '/images/default-avatar.png'
                     }
                     alt="ChannelAvatar"
                     layout="fill"
                  />
               </ChannelAvatar>
               {open && <span>{channel.name}</span>}

               {channel.private?.isPrivate && open && <PrivateIcon />}
            </Content>
         </Link>
      </Container>
   );
};

export default ChannelItem;
