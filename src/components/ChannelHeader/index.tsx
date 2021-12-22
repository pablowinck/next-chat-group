import { motion } from 'framer-motion';
import { useState } from 'react';
import ModalAdd from './ModalAdd';
import ModalAddChannel from './ModalAddChannel';
import { AddIcon, Container, Rounded } from './style';

const ChannelHeader = () => {
    const [view, setView] = useState(false);
    const [isOpenAdd, setIsOpenAdd] = useState(false);
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
            {view && <ModalAddChannel setIsOpenAdd={setIsOpenAdd} />}
            {isOpenAdd && <ModalAdd setIsOpenAdd={setIsOpenAdd} />}
        </Container>
    );
};

export default ChannelHeader;
