import { CloseSquare } from '@styled-icons/evaicons-solid/CloseSquare';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    width: 1420px;
    height: 770px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.colors.background[800]};

    display: grid;
    grid-template-columns: 270px auto;
    grid-template-rows: auto;
    grid-template-areas: 'navbar content';

    z-index: 100;
`;
export const Content = styled.div`
    color: ${(props) => props.theme.colors.text};
`;

export const CloseIcon = styled(CloseSquare)`
    position: absolute;

    top: 10px;
    right: 10px;

    width: 2rem;

    cursor: pointer;

    transition: color 0.3s ease-in-out;

    color: ${(props) => props.theme.colors.text};

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
