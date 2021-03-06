import { Add } from '@styled-icons/fluentui-system-filled/Add';
import styled from 'styled-components';
export const Container = styled.header`
    grid-area: CH;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 33px;
    background-color: ${(props) => props.theme.colors.background[400]};

    color: ${(props) => props.theme.colors.text};
    user-select: none;

    z-index: 1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    position: relative;

    span {
        font-size: 18px;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
export const Rounded = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 8px;

    background-color: ${(props) => props.theme.colors.background[100]};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.main};
        color: white;
    }
`;
export const AddIcon = styled(Add)`
    height: 14px;
    width: 14px;

    color: ${(props) => props.theme.colors.text};
`;
