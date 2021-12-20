import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import styled from 'styled-components';

export const Container = styled.div`
    grid-area: ON;
    background-color: ${(props) => props.theme.colors.background[800]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 27px;

    position: relative;

    user-select: none;

    span {
        margin-right: 5rem;
        font-size: 18px;
        font-weight: 700;
        color: ${(props) => props.theme.colors.text};
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
export const Avatar = styled.div`
    width: 42px;
    height: 42px;

    border-radius: 7px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 7px;
    }
`;

export const MoreIcon = styled(ArrowIosDownwardOutline)`
    width: 1.5rem;
    height: 1.5rem;

    cursor: pointer;

    color: ${(props) => props.theme.colors.text};

    /* transition: all 0.3s ease-in-out; */
`;
