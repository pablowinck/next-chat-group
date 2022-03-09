import { User } from 'contexts/UserContext';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import api from 'utils/api';
import { channelUtils } from 'utils/channelUtils';
import { Message } from './useMessages';

export type ChannelForm = {
   id: number;
   name: string;
   topic: string;
   image: string;
   createdAt: string;
   isPrivate: boolean;
   password: string;
};

export type ChannelDto = {
   name: string;
   topic: string;
   image: string;
   isPrivate: boolean;
   password: string;
};

export type Channel = {
   id: number;
   name: string;
   topic: string;
   image: string;
   members: User[];
   messages: Message[];
   private: {
      isPrivate: boolean;
      password: string;
   };
   isSelected: boolean;
   hasNotifications: boolean;
};

export const useFetchChannels = ({ userId }: { userId: string }) => {
   const { convertApiChannelArrayToChannel } = channelUtils;

   return useQuery<Channel[]>(
      ['channels', userId],
      () =>
         api.get(`channels/members/${userId}`).then((res) => {
            return convertApiChannelArrayToChannel(res.data);
         }),
      {
         staleTime: 5 * 60 * 1000 // 5 minutes
      }
   );
};

//!TODO create channel
export const useCreateChannel = ({ userId }: { userId: string }) => {
   const client = useQueryClient();
   return useMutation(
      (channelDto: ChannelDto) => {
         return api.post('channels', { ...channelDto, userId: userId });
      },
      { onSuccess: () => client.invalidateQueries(['channels', userId]) }
   );
};

//!TODO join channel
