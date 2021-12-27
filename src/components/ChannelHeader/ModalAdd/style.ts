import { CloseSquare } from '@styled-icons/evaicons-solid/CloseSquare';
import { Formik } from 'formik';
import { motion } from 'framer-motion';
import styled from 'styled-components';
export const Container = styled(motion.div)`
    position: absolute;

    top: calc(100% + 10vh);
    left: 25vw;
    right: 25vw;

    margin: auto;

    height: 62vh;
    width: 40vw;
    padding: 1rem 2rem;

    background-color: ${(props) => props.theme.colors.background[300]};
    color: ${(props) => props.theme.colors.text};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 18px;

    z-index: 10;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const CloseIcon = styled(CloseSquare)`
    width: 2rem;

    cursor: pointer;

    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
export const Title = styled.h1`
    font-size: 1.5rem;
`;

export const Content = styled(Formik)`
    margin: 1rem 0rem;
    height: calc(100% - 2rem);
    width: 100%;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    height: 100%;
    width: 100%;
`;
export const ChannelName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
`;
export const ChannelTopic = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
    margin-top: 1rem;
`;
export const ChannelPassword = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
    margin-top: 1rem;
`;
export const IsPrivate = styled.input`
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;

    background-color: ${(props) => props.theme.colors.background[100]};
    transition: background-color 0.3s ease-in-out;

    &:checked {
        background-color: ${(props) => props.theme.colors.primary};

        display: flex;
        justify-content: center;
        align-items: center;
        ::after {
            content: '\u0058';
            font-size: 1rem;
            color: ${(props) => props.theme.colors.text};
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.primaryDark};
        }
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.background[200]};
    }
`;
export const PrivateContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const Submit = styled.button`
    height: 2.5rem;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    border: none;
    border-radius: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark};
    }
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
    margin-left: 0.5rem;
`;
export const Input = styled.input`
    width: 100%;
    height: 2rem;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.colors.background[100]};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    padding: 0.5rem;
    transition: background-color 0.3s ease-in-out;

    &:focus {
        background-color: ${(props) => props.theme.colors.background[200]};
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.background[200]};
    }
`;

// avatar input
export const AvatarChange = styled.div`
    background-color: ${(props) => props.theme.colors.background[100]};
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    margin: 0 auto;
`;
