import { ArrowLeftCircleFill } from '@styled-icons/bootstrap/ArrowLeftCircleFill';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    place-items: center;

    background-color: ${(props) => props.theme.colors.background[800]};
    color: ${(props) => props.theme.colors.text};

    position: relative;
`;

export const ArrowLeft = styled(ArrowLeftCircleFill)`
    width: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;

export const Title = styled.div`
    font-size: 2rem;

    display: flex;
    gap: 1rem;
`;

export const Content = styled.div`
    position: absolute;
    z-index: 1;
    width: 40rem;

    display: flex;
    flex-direction: column;

    padding: 2rem;

    background: ${(props) => props.theme.colors.background[400]};
    border-radius: 8px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        color: ${(props) => props.theme.colors.error};
        font-size: 0.8rem;
        margin-left: 0.3rem;
    }
`;
export const Label = styled.label`
    margin: 1rem 0 0 0.3rem;

    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 800;
`;
export const Input = styled.input`
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;

    background: ${(props) => props.theme.colors.background[100]};
    color: ${(props) => props.theme.colors.text};

    transition: all 0.3s ease-in-out;

    &:focus,
    &:hover {
        background: ${(props) => props.theme.colors.background[300]};
    }
`;

export const Button = styled.button`
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 0.8rem;
    font-weight: 800;

    background: ${(props) => props.theme.colors.primary.dark};
    color: ${(props) => props.theme.colors.text};

    transition: all 0.3s ease-in-out;
    cursor: pointer;

    margin-top: 0.75rem;

    &:hover {
        background: ${(props) => props.theme.colors.primary.main};
    }

    text-transform: uppercase;
`;

export const SuccessMessage = styled(motion.div)`
    position: absolute;
    z-index: 2;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: 0 auto;

    width: 20rem;
    height: 5rem;

    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background: ${(props) => props.theme.colors.success};
        border-radius: 1rem;
        z-index: 1;
        opacity: 0.8;
    }
    ::before {
        content: 'Sent with success';
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;

        font-size: 1.5rem;
        font-weight: 800;
        color: ${(props) => props.theme.colors.text};
        text-transform: uppercase;

        display: grid;
        place-items: center;
    }
`;
