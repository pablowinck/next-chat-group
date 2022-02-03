import { useUserContext } from 'contexts/UserContext';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Menu from './Menu';
import { Avatar, Container, MoreIcon } from './style';

const OnlineUser = () => {
    const [open, setOpen] = useState(false);
    const { user } = useUserContext();

    const handleToggle = () => {
        setOpen(!open);
    };
    const variants = {
        open: { rotate: 180 },
        closed: { rotate: 0 }
    };

    return (
        <Container>
            <div className="content">
                <Avatar>
                    <Image
                        src={
                            user?.profileImage
                                ? user?.profileImage
                                : '/images/default-avatar.png'
                        }
                        alt="Avatar"
                        layout="intrinsic"
                        width={'100%'}
                        height={'100%'}
                        draggable={false}
                    />
                </Avatar>
                <span>{user?.name}</span>
            </div>

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
