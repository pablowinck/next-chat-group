import { Channel } from 'contexts/ChatContext';
import api from '../utils/api';

export const channelsApi = {
    getByUser: async () => {
        let currentChannels;
        const user = JSON.parse(localStorage.getItem('user'));
        await api
            .get('channels/members/' + user.id)
            .then((res) => (currentChannels = res.data))
            .catch((err) => console.log(err));
        currentChannels = currentChannels
            .map((channel) => {
                console.log('currentChannel ', channel);

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
        currentChannels[0].isSelected = true;
        return currentChannels;
    },
    createChannel: async (channel: Channel) => {
        const user = JSON.parse(localStorage.getItem('user'));

        let newChannel;

        await api
            .post(
                'channels',
                JSON.stringify({
                    name: channel.name,
                    topic: channel.topic,
                    image: channel.image,
                    isPrivate: channel.private.isPrivate,
                    password: channel.private.password,
                    userId: user?.id
                })
            )
            .then((res) => {
                newChannel = res.data;
            });
        return newChannel;
    },
    joinChannel: async (channelId: number) => {
        const user = JSON.parse(localStorage.getItem('user'));
        await api.get('channels/' + channelId + '/add-member/' + user.id);
    }
};
