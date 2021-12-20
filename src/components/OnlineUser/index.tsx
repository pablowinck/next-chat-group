import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Menu from './Menu';
import { Avatar, Container, MoreIcon } from './style';

const OnlineUser = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };
    const variants = {
        open: { rotate: 180 },
        closed: { rotate: 0 }
    };

    return (
        <Container>
            <Avatar>
                <img src="/images/default-avatar.png" alt="" />
            </Avatar>
            <span>Pablo Winter</span>

            <motion.div animate={open ? 'open' : 'closed'} variants={variants}>
                <MoreIcon onClick={handleToggle} />
            </motion.div>

            {open && (
                <AnimatePresence exitBeforeEnter>
                    <Menu />
                </AnimatePresence>
            )}
        </Container>
    );
};

export default OnlineUser;
