import { Channel, ChannelForm } from 'hooks/useChannels';

const convertApiChannelToChannel = (apiChannel: ChannelForm): Channel => {
   return {
      id: apiChannel.id,
      name: apiChannel.name,
      topic: apiChannel.topic,
      image: apiChannel.image,
      members: [],
      messages: [],
      private: {
         isPrivate: apiChannel.isPrivate,
         password: apiChannel.password
      },
      isSelected: false,
      hasNotifications: false
   };
};

export const channelUtils = {
   convertApiChannelArrayToChannel: (apiChannel: any[]) => {
      return apiChannel.map((channel) => convertApiChannelToChannel(channel));
   }
};
