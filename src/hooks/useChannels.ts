import { User } from 'contexts/UserContext';
import { useQuery } from 'react-query';
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

   return useQuery<Channel[]>(['channels', userId], () =>
      api.get(`channels/members/${userId}`).then((res) => {
         return convertApiChannelArrayToChannel(res.data);
      })
   );
};

//!TODO create channel

//!TODO join channel
