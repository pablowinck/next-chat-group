import { ArrowDownCircleFill } from '@styled-icons/bootstrap/ArrowDownCircleFill';
import styled from 'styled-components';
export const Container = styled.div`
    color: ${(props) => props.theme.colors.text};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    position: relative;
`;
export const Selector = styled.select`
    width: 20rem;
    height: 40px;

    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.text};

    /* reset */
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;

    border-radius: 8px;
    padding: 0 1rem;

    font-size: 1.1rem;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }

    /* position: relative;
    &::before {
        content: 'v';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 10px;
        margin: auto 0;
        color: white;
        z-index: 1;
        font-size: 1.5rem;
    } */
`;
export const Input = styled.div`
    position: relative;
`;
export const ArrowDown = styled(ArrowDownCircleFill)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    color: white;
    z-index: 1;
    width: 1rem;
`;
export const Option = styled.option`
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.text};

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }
`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: 500;

    margin-bottom: 1rem;
`;

export const Title = styled.div`
    font-size: 1.5rem;

    position: absolute;

    top: 1rem;
    left: 5rem;
`;
