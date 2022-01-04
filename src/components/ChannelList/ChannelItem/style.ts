import { Lock } from '@styled-icons/boxicons-solid/Lock';
import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    padding: 0 2rem;

    user-select: none;
    cursor: pointer;

    position: relative;
`;
export const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};

    display: flex;
    justify-content: start;
    align-items: center;

    width: 100%;
    margin: 0.5rem 0;
    font-size: 1.2rem;
    text-transform: uppercase;
    border-radius: 0.75rem;

    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.background[100]};
    }
    &.selected {
        background-color: ${(props) => props.theme.colors.background[100]};
    }
`;

export const ChannelAvatar = styled.div<{ hasNotifications: boolean }>`
    width: 3rem;
    height: 3rem;
    border-radius: 25%;
    background-color: ${(props) => props.theme.colors.background[100]};
    margin-right: 1rem;

    position: relative;

    img {
        width: 100%;
        height: 100%;
        border-radius: 25%;
    }

    ::after {
        content: '';
        position: absolute;
        top: 65%;
        left: -0.5rem;
        width: 1rem;
        height: 1rem;
        border: 3px solid ${(props) => props.theme.colors.background[400]};
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.red[700]};

        display: ${(props) => (props.hasNotifications ? 'block' : 'none')};
    }
`;

export const PrivateIcon = styled(Lock)`
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;

    color: ${(props) => props.theme.colors.secondary};

    right: 3.5rem;
`;
