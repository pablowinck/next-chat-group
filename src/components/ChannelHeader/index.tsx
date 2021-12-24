import { motion } from 'framer-motion';
import Channel from 'model/Channel';
import { FC, useState } from 'react';
import ModalAdd from './ModalAdd';
import ModalAddChannel from './ModalAddChannel';
import ModalJoin from './ModalJoin';
import { AddIcon, Container, Rounded } from './style';

interface IProps {
    setChannels: (value: Channel[]) => void;
    channels: Channel[];
}

const ChannelHeader: FC<IProps> = ({ setChannels, channels }) => {
    const [view, setView] = useState(false);
    const [isOpenAdd, setIsOpenAdd] = useState(false);

    const [isOpenJoin, setIsOpenJoin] = useState(false);
    const variants = {
        open: { rotate: 45 },
        closed: { rotate: 0 }
    };
    return (
        <Container>
            <span>Channels</span>

            <Rounded onClick={() => setView(!view)}>
                <motion.div
                    animate={view ? 'open' : 'closed'}
                    variants={variants}
                >
                    <AddIcon />
                </motion.div>
            </Rounded>
            {view && (
                <ModalAddChannel
                    setIsOpenAdd={setIsOpenAdd}
                    setIsOpenJoin={setIsOpenJoin}
                />
            )}
            {isOpenAdd && (
                <ModalAdd
                    setChannels={setChannels}
                    channels={channels}
                    setIsOpenAdd={setIsOpenAdd}
                />
            )}

            {isOpenJoin && <ModalJoin setIsOpenJoin={setIsOpenJoin} />}
        </Container>
    );
};

export default ChannelHeader;
