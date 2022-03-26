import { useMenuContext } from 'contexts/MenuContext';
import { Channel } from 'hooks/useChannels';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import DeleteButton from './DeleteButton';
import { ChannelAvatar, Container, Content, PrivateIcon } from './style';

interface props {
   channel: Channel;
   index: number;
   deleteMode: boolean;
   setDeleteMode: (value: boolean) => void;
}

type MouseProps = {
   active: boolean;
   date: Date;
};

const ChannelItem: React.FC<props> = ({
   channel,
   index,
   deleteMode,
   setDeleteMode
}) => {
   const { open } = useMenuContext();

   const [mouse, setMouse] = useState<MouseProps>({
      active: false,
      date: null
   });

   const handleUp = () => {
      const currentDate = new Date();
      const { date } = mouse;
      if (!date) return;

      const difference = currentDate.getTime() - date.getTime();
      const seconds = difference / 1000;

      if (seconds < 1) return;

      setDeleteMode(!deleteMode);
      setMouse({
         active: false,
         date: null
      });
   };

   const handleDown = () => {
      setMouse({
         active: true,
         date: new Date()
      });
   };

   return (
      <Draggable
         draggableId={`${channel.id}`}
         index={index}
         key={channel.id}
         isDragDisabled={!deleteMode}
      >
         {(provided) => (
            <div
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               onMouseDown={handleDown}
               onMouseUp={handleUp}
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
                           deleteMode={deleteMode}
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
                        {deleteMode && (
                           <DeleteButton
                              channelId={`${channel.id}`}
                              isMenuOpen={open}
                           />
                        )}
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
