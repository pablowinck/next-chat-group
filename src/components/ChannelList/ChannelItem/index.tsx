import { Channel, useChatContext } from 'contexts/ChatContext';
import Image from 'next/image';
import { ChannelAvatar, Container, Link, PrivateIcon } from './style';

interface props {
    channel: Channel;
}

const ChannelItem: React.FC<props> = ({ channel }) => {
    const { onSelectChannel } = useChatContext();
    return (
        <Container>
            <Link
                onClick={() => onSelectChannel(channel)}
                className={channel.isSelected && 'selected'}
            >
                <ChannelAvatar hasNotifications={channel.hasNotifications}>
                    <Image
                        src={
                            channel.image
                                ? channel.image
                                : '/images/default-avatar.png'
                        }
                        alt="ChannelAvatar"
                        layout="fill"
                    />
                </ChannelAvatar>
                <span>{channel.name}</span>

                {channel.private?.isPrivate && <PrivateIcon />}
            </Link>
        </Container>
    );
};

export default ChannelItem;
