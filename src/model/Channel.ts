export default interface Channel {
    id: number;
    name: string;
    topic: string;
    image: string;
    members: [];
    private: {
        isPrivate: boolean;
        password: string;
    };
    isSelected: boolean;
    hasNotifications: boolean;
}
