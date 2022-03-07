import { useMenuContext } from 'contexts/MenuContext';
import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import ModalAddChannel from './ModalAddChannel';
import {
    AddIcon,
    Container,
    Content,
    OpenCloseButton,
    OpenCloseIcon,
    Rounded
} from './style';

const ChannelHeader: FC = () => {
    const [view, setView] = useState(false);
    const { open, setOpen } = useMenuContext();
    const variants = {
        open: { rotate: 45 },
        closed: { rotate: 0 }
    };
    return (
        <Container>
            <Content>
                <OpenCloseButton className={!open && 'closed'}>
                    <OpenCloseIcon onClick={() => setOpen(!open)} />
                </OpenCloseButton>
                {open && <span>Channels</span>}
            </Content>
            {open && (
                <Rounded onClick={() => setView(!view)}>
                    <motion.div
                        animate={view ? 'open' : 'closed'}
                        variants={variants}
                    >
                        <AddIcon />
                    </motion.div>
                </Rounded>
            )}
            {view && <ModalAddChannel />}
        </Container>
    );
};

export default ChannelHeader;
