import { Logout } from '@styled-icons/material-sharp/Logout';
import styled from 'styled-components';

export const Container = styled.div`
    grid-area: navbar;

    height: 100%;
    width: 100%;

    border-radius: 18px 0 0 18px;
    padding: 4rem 1rem 1rem 1rem;

    background-color: ${(props) => props.theme.colors.background[100]};

    .active {
        background-color: ${(props) => props.theme.colors.background[800]};
    }
`;

export const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    padding: 0 1rem;

    height: 50px;
    width: 100%;
    border-radius: 8px;

    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.background[800]};
    }

    @media (max-width: 1070px) {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const Icon = styled.div`
    height: 30px;
    width: 30px;

    color: ${(props) => props.theme.colors.text};
`;
export const Name = styled.span`
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};

    user-select: none;

    @media (max-width: 1070px) {
        display: none;
    }
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media (max-width: 1070px) {
        justify-content: center;
        align-items: center;
    }
`;
export const LogoutItem = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    padding: 0 3rem;

    height: 50px;
    width: 100%;

    border-radius: 8px;

    color: ${(props) => props.theme.colors.red[500]};

    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.background[800]};
    }
    p {
        @media (max-width: 1070px) {
            display: none;
        }
    }

    @media (max-width: 1070px) {
        justify-content: center;
        align-items: center;
    }
`;
export const LogoutIcon = styled(Logout)`
    height: 30px;
    width: 30px;
`;
export const Title = styled.p`
    position: absolute;
    top: 20px;
    left: 20px;

    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
`;
