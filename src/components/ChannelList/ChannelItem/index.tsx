import Image from 'next/image';

import Channel from 'model/Channel';
import { ChannelAvatar, Container, Link, PrivateIcon } from './style';

const ChannelItem = ({ channel }: { channel: Channel }) => {
    return (
        <Container className={channel.isSelected && 'selected'}>
            <Link>
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
