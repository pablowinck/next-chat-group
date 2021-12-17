export default interface Channel {
    id: number;
    name: string;
    topic: string;
    image: string;
    members: [];
    isPrivate: boolean;
    isSelected: boolean;
    hasNotifications: boolean;
}
