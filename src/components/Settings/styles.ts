import styled from 'styled-components';

import { CloseSquare } from '@styled-icons/evaicons-solid/CloseSquare';

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    animation: slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1);

    width: 1420px;
    height: 770px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.colors.background[800]};

    display: grid;
    grid-template-columns: 270px auto;
    grid-template-rows: auto;
    grid-template-areas: 'navbar content';

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
