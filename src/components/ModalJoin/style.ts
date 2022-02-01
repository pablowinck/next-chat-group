import styled from 'styled-components';
import { CloseSquare } from '@styled-icons/evaicons-solid/CloseSquare';

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1);

    height: min(20rem, 25vh);
    width: min(20rem, 25vw);

    background-color: ${(props) => props.theme.colors.background[300]};
    color: ${(props) => props.theme.colors.text};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 18px;

    z-index: 10;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3rem auto;
    grid-template-areas:
        'header'
        'content';

    @keyframes slideUp {
        0% {
            opacity: 0;
            transform: translate(-50%, -56%);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
`;
export const Header = styled.div`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    border-radius: 18px 18px 0 0;
    background-color: ${(props) => props.theme.colors.background[100]};
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: initial;
    height: 100%;
    gap: 0.5rem;
    padding: 1rem 2rem;
`;
export const Footer = styled.div`
    border-radius: 0 0 18px 18px;
    background-color: ${(props) => props.theme.colors.background[100]};

    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding-right: 2rem;
`;
export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
`;
export const CloseIcon = styled(CloseSquare)`
    grid-area: close;
    width: 2rem;

    cursor: pointer;

    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
export const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 1rem;

    color: ${(props) => props.theme.colors.text};
`;
export const Input = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 18px;
    background-color: ${(props) => props.theme.colors.background[100]};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.2rem;
`;
export const Button = styled.button`
    width: 5rem;
    height: 2rem;
    border: none;
    border-radius: 18px;
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;

    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }
`;

export const Form = styled.form`
    grid-area: content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
