export const channelUtils = {
   convertApiChannelArrayToChannel: (apiChannel: any[]) => {
      return apiChannel
         .map((channel) => {
            return {
               id: channel.id,
               name: channel.name,
               topic: channel.topic,
               image: channel.image,
               members: [],
               messages: [],
               createdAt: channel.createdAt,
               private: {
                  isPrivate: channel.isPrivate,
                  password: channel.password
               },
               isSelected: false,
               hasNotifications: false
            };
         })
         .sort((a, b) => {
            if (a.createdAt > b.createdAt) return 1;
            if (a.createdAt < b.createdAt) return -1;
         });
   }
};
