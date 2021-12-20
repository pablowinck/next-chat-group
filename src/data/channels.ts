import Channel from 'model/Channel';

export const channelsData: Channel[] = [
    {
        id: 1,
        name: 'General',
        topic: 'Welcome to the General Channel',
        image: 'https://avatarfiles.alphacoders.com/153/thumb-1920-153179.png',
        members: [],
        isPrivate: false,
        hasNotifications: false,
        isSelected: true
    },
    {
        id: 2,
        name: 'Animes',
        topic: 'Welcome to the Animes Channel',
        image: 'https://i.pinimg.com/736x/8e/61/cf/8e61cf229c3473c40a3ed9806ea5c383.jpg',
        members: [],
        isPrivate: true,
        hasNotifications: false,
        isSelected: false
    },
    {
        id: 3,
        name: 'Series',
        topic: 'Welcome to the Series Channel',
        image: 'https://i.pinimg.com/736x/09/4a/48/094a48d40e2b409fdb328ab332078923.jpg',
        members: [],
        isPrivate: false,
        hasNotifications: true,
        isSelected: false
    }
];
