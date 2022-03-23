import { useMenuContext } from 'contexts/MenuContext';
import { useUserContext } from 'contexts/UserContext';
import { useFetchChannels } from 'hooks/useChannels';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ChannelItem from './ChannelItem';
import Loading from './Loading';
import SearchBar from './SearchBar';
import { Container, Content } from './style';

const ChannelList: React.FC = () => {
   const [filter, setFilter] = useState('');
   const [channels, setChannels] = useState([]);
   const { user } = useUserContext();
   const { data, isError, isLoading } = useFetchChannels({
      userId: `${user.id}`
   });
   const { open } = useMenuContext();

   useEffect(() => {
      if (!data) return;
      setChannels(
         data.filter((channel) =>
            channel.name.toLowerCase().includes(filter.toLowerCase())
         )
      );
   }, [data, filter]);

   if (isLoading) {
      return <Loading />;
   }

   //!TODO #45 refactor error in channel list
   if (isError || !data) {
      return <div>error...</div>;
   }
   const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
   };
   function onDragEnd(result) {
      if (!result.destination) {
         return;
      }

      if (result.destination.index === result.source.index) {
         return;
      }

      const newChannels = reorder(
         channels,
         result.source.index,
         result.destination.index
      );

      setChannels(newChannels);
   }

   return (
      <Container>
         <Content>
            {open && <SearchBar setFilter={setFilter} />}
            <DragDropContext onDragEnd={onDragEnd}>
               <Droppable droppableId="list">
                  {(provided) => (
                     <div ref={provided.innerRef} {...provided.droppableProps}>
                        {channels.map((channel, index) => (
                           <ChannelItem
                              key={index}
                              channel={channel}
                              index={index}
                           />
                        ))}
                        {provided.placeholder}
                     </div>
                  )}
               </Droppable>
            </DragDropContext>
         </Content>
      </Container>
   );
};

export default ChannelList;
