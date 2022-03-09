import { User } from 'contexts/UserContext';
import { useQuery } from 'react-query';
import api from 'utils/api';

export type Message = {
   user: User;
   content: string;
   createdAt: Date;
};

export const useFetchMessages = ({ channelId }: { channelId: string }) => {
   return useQuery<Message[]>(['messages', channelId], () =>
      api.get('messages/channel/' + channelId).then((res) => {
         return res.data.map((message) => ({
            user: message.user,
            content: message.text,
            createdAt: new Date(message.createdAt)
         }));
      })
   );
};
