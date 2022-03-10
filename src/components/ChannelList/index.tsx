import { useMenuContext } from 'contexts/MenuContext';
import { useUserContext } from 'contexts/UserContext';
import { useFetchChannels } from 'hooks/useChannels';
import { useState } from 'react';
import ChannelItem from './ChannelItem';
import Loading from './Loading';
import SearchBar from './SearchBar';
import { Channels, Container, Content } from './style';

const ChannelList: React.FC = () => {
   const [filter, setFilter] = useState('');
   const { user } = useUserContext();
   const { data, isError, isLoading } = useFetchChannels({
      userId: `${user.id}`
   });
   const { open } = useMenuContext();

   if (isLoading) {
      return <Loading />;
   }

   if (isError || !data) {
      return <div>error...</div>;
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
