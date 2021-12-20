import Channel from 'model/Channel';
import Image from 'next/image';
import { ChannelAvatar, Container, Link, PrivateIcon } from './style';

interface props {
    channel: Channel;
    setChannelSelected: (channel: Channel) => void;
}

const ChannelItem: React.FC<props> = ({ channel, setChannelSelected }) => {
    return (
        <Container>
            <Link
                onClick={() => setChannelSelected(channel)}
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

                {channel.isPrivate && <PrivateIcon />}
            </Link>
        </Container>
    );
};

export default ChannelItem;
