import { Button, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import { CloseSquare } from '@styled-icons/evaicons-solid/CloseSquare';
import { motion } from 'framer-motion';
import styled from 'styled-components';
export const Container = styled(motion.div)`
    position: absolute;

    top: calc(100% + 20vh);
    left: 25vw;
    right: 25vw;

    margin: auto;

    height: 40vh;
    width: 40vw;
    padding: 1rem 2rem;

    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background[300]};
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

export const Content = styled.div`
    margin: 1rem 0rem;
    height: calc(100% - 2rem);
    width: 100%;
`;
export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
        'name name'
        'topic topic'
        'private image'
        'submit submit';
    grid-gap: 1rem;
    align-items: center;
`;
export const ChannelName = styled(TextField)`
    grid-area: name;

    &:focus,
    &:active {
        box-shadow: none;
    }
`;
export const ChannelTopic = styled(TextField)`
    grid-area: topic;
`;
export const ChannelImage = styled.input`
    grid-area: image;
`;
export const IsPrivate = styled(Checkbox)``;
export const PrivateContent = styled.div`
    grid-area: private;

    display: flex;
    justify-content: start;
    align-items: center;
`;

export const Submit = styled(Button)`
    grid-area: submit;
`;
