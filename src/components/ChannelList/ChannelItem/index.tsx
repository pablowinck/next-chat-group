import { useMenuContext } from 'contexts/MenuContext';
import { useUserContext } from 'contexts/UserContext';
import { Channel } from 'hooks/useChannels';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { ChannelAvatar, Container, Content, PrivateIcon } from './style';

interface props {
   channel: Channel;
}

const ChannelItem: React.FC<props> = ({ channel }) => {
   //  const { onSelectChannel } = useChatContext();
   const router = useRouter();
   const { open } = useMenuContext();
   const client = useQueryClient();
   const { user } = useUserContext();
   // const onSelectChannel = (currentChannel: Channel) => {
   //    const channels = client.getQueryData<Channel[]>(['channels', user.id]);
   //    console.log('channels react query', channels);

   //    // currentChannel.hasNotifications = false;
   //    // let newChannels = channels.map((channel) => {
   //    //    channel.isSelected = channel.id === currentChannel.id ? true : false;
   //    //    return channel;
   //    // });
   //    // client.setQueryData(['channels', user.id], newChannels);
   // };
   return (
      <Container>
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
