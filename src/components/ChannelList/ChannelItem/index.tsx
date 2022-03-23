import { useMenuContext } from 'contexts/MenuContext';
import { Channel } from 'hooks/useChannels';
import Image from 'next/image';
import Link from 'next/link';
import { Draggable } from 'react-beautiful-dnd';
import { ChannelAvatar, Container, Content, PrivateIcon } from './style';

interface props {
   channel: Channel;
   index: number;
}

const ChannelItem: React.FC<props> = ({ channel, index }) => {
   const { open } = useMenuContext();

   return (
      <Draggable draggableId={`${channel.id}`} index={index} key={channel.id}>
         {(provided) => (
            <div
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
            >
               <Container>
                  <Link href={`/chat/${channel.id}`} passHref>
                     <Content
                        draggable={`false`}
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
                              draggable={false}
                           />
                        </ChannelAvatar>
                        {open && <span>{channel.name}</span>}

                        {channel.private?.isPrivate && open && <PrivateIcon />}
                     </Content>
                  </Link>
               </Container>
            </div>
         )}
      </Draggable>
   );
};

export default ChannelItem;
