import { useMenuContext } from 'contexts/MenuContext';
import { useUserContext } from 'contexts/UserContext';
import { useFetchChannels } from 'hooks/useChannels';
import { useState } from 'react';
import ChannelItem from './ChannelItem';
import SearchBar from './SearchBar';
import { Channels, Container, Content } from './style';

const ChannelList: React.FC = () => {
   const [filter, setFilter] = useState('');
   const { user } = useUserContext();
   const { data, isLoading } = useFetchChannels({ userId: user.id.toString() });
   const { open } = useMenuContext();

   //!TODO create skeleton
   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <Container>
         <Content>
            {open && <SearchBar setFilter={setFilter} />}
            <Channels>
               {data
                  .filter((channel) =>
                     channel.name.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map((channel, index) => {
                     return <ChannelItem key={index} channel={channel} />;
                  })}
            </Channels>
         </Content>
      </Container>
   );
};

export default ChannelList;
