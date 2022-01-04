import { CloseSquare } from '@styled-icons/evaicons-solid/CloseSquare';
import { Formik } from 'formik';
import { motion } from 'framer-motion';
import styled from 'styled-components';
export const Container = styled(motion.div)`
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    margin: auto;

    height: 35rem;
    width: 50rem;
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
    height: 100%;
    width: 100%;
`;
export const Form = styled.form`
    display: grid;
    grid-template-columns: auto;
    grid-template-row: 1fr auto 1fr;
    grid-template-areas: 'avatar' 'input' 'button';

    height: 100%;
    width: 100%;
`;
export const AvatarChange = styled.div`
    grid-area: avatar;
    background-color: ${(props) => props.theme.colors.background[100]};
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
    margin: 0.5rem auto 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.background[200]};
    }

    ::after {
        content: 'upload a photo';
        padding: 0.5rem;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.text};
        text-transform: uppercase;
    }
`;
export const FormContent = styled.div`
    grid-area: input;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
export const Submit = styled.button`
    grid-area: button;
    height: 2.5rem;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    border: none;
    border-radius: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }
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

    .disabled {
        background-color: ${(props) => props.theme.colors.background[800]};
        pointer-events: none;
    }

    .label-disabled {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
export const IsPrivate = styled.input`
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;

    background-color: ${(props) => props.theme.colors.background[100]};
    transition: background-color 0.3s ease-in-out;

    &:checked {
        background-color: ${(props) => props.theme.colors.primary.main};

        display: flex;
        justify-content: center;
        align-items: center;
        ::after {
            content: '\u0058';
            font-size: 1rem;
            color: ${(props) => props.theme.colors.text};
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.primary.dark};
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
