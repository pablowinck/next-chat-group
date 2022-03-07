import { Channel, useChatContext } from 'contexts/ChatContext';
import { useMenuContext } from 'contexts/MenuContext';
import Image from 'next/image';
import { ChannelAvatar, Container, Link, PrivateIcon } from './style';

interface props {
    channel: Channel;
}

const ChannelItem: React.FC<props> = ({ channel }) => {
    const { onSelectChannel } = useChatContext();
    const { open } = useMenuContext();
    return (
        <Container>
            <Link
                onClick={() => onSelectChannel(channel)}
                className={channel.isSelected && open && 'selected'}
                isMenuOpen={open}
            >
                <ChannelAvatar
                    hasNotifications={channel.hasNotifications}
                    isMenuOpen={open}
                >
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
                {open && <span>{channel.name}</span>}

                {channel.private?.isPrivate && open && <PrivateIcon />}
            </Link>
        </Container>
    );
};

export default ChannelItem;
