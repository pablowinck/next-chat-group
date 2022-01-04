import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import { Settings } from '@styled-icons/evaicons-solid/Settings';
import { Logout } from '@styled-icons/material-sharp/Logout';
import { motion } from 'framer-motion';
import styled from 'styled-components';
export const Container = styled(motion.div)`
    position: absolute;

    width: 192px;
    height: 173px;

    background-color: ${(props) => props.theme.colors.background[300]};

    border-radius: 12px;

    padding: 12px;

    top: -10rem;
    right: 1rem;

    display: flex;
    flex-direction: column;
`;
export const Item = styled.div`
    width: 100%;
    height: 39px;

    margin-bottom: 0.5rem;

    display: grid;
    grid-template-columns: 2rem auto;
    grid-template-areas: 'ICON TEXT';
    justify-items: start;

    border-radius: 8px;

    padding: 11px 0 11px 13px;

    cursor: pointer;

    background: none;
    border: none;

    &:hover {
        background-color: ${(props) => props.theme.colors.background[100]};
    }

    span {
        grid-area: TEXT;
        font-size: 12px;
        font-weight: 500;
        width: 100%;
        color: ${(props) => props.theme.colors.text};
    }

    .red {
        color: ${(props) => props.theme.colors.red[500]};
    }
`;

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.background[200]};
    margin: 0.3rem 0 0.3rem 0;
`;
export const ProfileIcon = styled(UserCircle)`
    grid-area: ICON;
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.colors.text};

    margin-right: 11px;
`;
export const ConfigurationIcon = styled(Settings)`
    grid-area: ICON;
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.colors.text};

    margin-right: 11px;
`;
export const LogoutIcon = styled(Logout)`
    grid-area: ICON;
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.colors.text};

    margin-right: 11px;
`;
