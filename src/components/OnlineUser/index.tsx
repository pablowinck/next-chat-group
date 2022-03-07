import { useMenuContext } from 'contexts/MenuContext';
import { useUserContext } from 'contexts/UserContext';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Menu from './Menu';
import { Avatar, Container, MoreIcon } from './style';

const OnlineUser = () => {
    const [internalMenuOpen, setInternalMenuOpen] = useState(false);
    const { user } = useUserContext();
    const { open } = useMenuContext();
    const handleToggle = () => {
        setInternalMenuOpen(!internalMenuOpen);
    };
    const variants = {
        internalMenuOpen: { rotate: 180 },
        closed: { rotate: 0 }
    };

    return (
        <Container>
            <div className="content">
                <Avatar
                    onClick={() => {
                        if (open) return;
                        handleToggle();
                    }}
                    isOpenMenu={open}
                >
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
                {open && <span>{user?.name}</span>}
            </div>

            {open && (
                <motion.div
                    animate={internalMenuOpen ? 'internalMenuOpen' : 'closed'}
                    variants={variants}
                >
                    <MoreIcon onClick={handleToggle} />
                </motion.div>
            )}

            {internalMenuOpen && (
                <AnimatePresence exitBeforeEnter>
                    <Menu />
                </AnimatePresence>
            )}
        </Container>
    );
};

export default OnlineUser;
