import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import ModalAddChannel from './ModalAddChannel';
import { AddIcon, Container, Rounded } from './style';

const ChannelHeader: FC = () => {
    const [view, setView] = useState(false);

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
            {view && <ModalAddChannel />}
        </Container>
    );
};

export default ChannelHeader;
