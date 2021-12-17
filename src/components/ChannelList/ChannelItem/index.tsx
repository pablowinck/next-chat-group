import Channel from 'model/Channel';
import { ChannelAvatar, Container, Link } from './style';

const ChannelItem = ({ channel }: { channel: Channel }) => {
    return (
        <Container className={channel.isSelected && 'selected'}>
            <Link>
                <ChannelAvatar hasNotifications={channel.hasNotifications}>
                    <img
                        src={
                            channel.image
                                ? channel.image
                                : '/images/default-avatar.png'
                        }
                        alt="ChannelAvatar"
                    />
                </ChannelAvatar>
                <span>{channel.name}</span>
            </Link>
        </Container>
    );
};

export default ChannelItem;
