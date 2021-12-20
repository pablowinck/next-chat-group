export interface Message {
    id: number;
    channelId: number;
    user: {
        id: number;
        name: string;
        email: string;
        profileImage: string;
        createdAt: Date;
    };
    content: string;
    createdAt: Date;
}
