import { LogInCircle } from '@styled-icons/boxicons-regular/LogInCircle';
import { MessageSquareAdd } from '@styled-icons/boxicons-regular/MessageSquareAdd';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    position: absolute;

    top: 6rem;
    left: 0;
    right: 2rem;
    bottom: 0;
    margin: auto;

    height: 8.5rem;
    width: 13rem;
    padding: 1rem;

    background-color: ${(props) => props.theme.colors.background[300]};
    border-radius: 18px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Item = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    grid-gap: 0.5rem;
    align-items: center;
    justify-items: center;

    width: 100%;
    height: 3rem;
    border-radius: 18px;
    cursor: pointer;

    font-size: 0.9rem;
    font-weight: 100;
    text-align: start;

    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.background[100]};
    }
`;
export const AddIcon = styled(MessageSquareAdd)`
    width: 2rem;
`;

export const JoinIcon = styled(LogInCircle)`
    width: 2rem;
`;
export const AddText = styled.p``;
export const JoinText = styled.p``;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
