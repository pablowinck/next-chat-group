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

export const useCreateChannel = ({ userId }: { userId: string }) => {
   const client = useQueryClient();
   return useMutation(
      (channelDto: ChannelDto) =>
         api.post('channels', { ...channelDto, userId: userId }),
      { onSuccess: () => client.invalidateQueries(['channels', userId]) }
   );
};

export const useJoinChannel = ({ userId }: { userId: string }) => {
   const client = useQueryClient();
   return useMutation(
      (channelId: string) => api.post('channels/join', { channelId, userId }),
      { onSuccess: () => client.invalidateQueries(['channels', userId]) }
   );
};

export const useUnJoinChannel = ({ userId }: { userId: string }) => {
   const client = useQueryClient();
   return useMutation(
      (channelId: string) => {
         console.log('[unJoinChannel]', { channelId, userId });

         return api.post('channels/unjoin', { channelId, userId });
      },
      { onSuccess: () => client.invalidateQueries(['channels', userId]) }
   );
};
