import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)<{ type: string }>`
    position: fixed;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 800;

    height: min(3rem, 10vh);
    width: min(20rem, 45vw);

    display: grid;
    place-items: center;

    font-size: 1.2rem;
    font-weight: 800;
    color: #fff;

    backdrop-filter: blur(6px);

    ::after {
        content: '';
        z-index: -1;
        border-radius: 12px;
        background: ${(props) =>
            props.type === 'success'
                ? 'linear-gradient(to right, #00c851, #00e676)'
                : props.type === 'error'
                ? 'linear-gradient(to right, #ff5252, #ff1744)'
                : 'linear-gradient(to right, #ff8f00, #ffa726)'};
        height: 100%;
        width: 100%;
        position: absolute;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

        opacity: 0.4;
    }
`;
