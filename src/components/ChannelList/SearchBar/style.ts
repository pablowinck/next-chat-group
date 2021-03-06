import styled from 'styled-components';
import { Search } from 'styled-icons/boxicons-regular';
export const Container = styled.div`
    display: grid;
    width: 265.42px;
    height: 48px;

    margin: 20px auto 40px auto;
`;
export const SeachIcon = styled(Search)`
    grid-area: 1/1;
    height: 24px;
    width: 24px;
    align-self: center;
    margin-left: 10px;

    color: ${(props) => props.theme.colors.text};
`;
export const Input = styled.input`
    grid-area: 1/1;
    background-color: ${(props) => props.theme.colors.background[100]};
    width: 100%;
    border-radius: 8px;
    padding-left: 44px;
    padding-right: 12px;

    color: ${(props) => props.theme.colors.text};

    font-size: 14px;

    transition: background-color 0.3s ease-in-out;

    &:focus,
    &:hover {
        background-color: ${(props) => props.theme.colors.background[300]};
    }
`;
