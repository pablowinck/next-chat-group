import styled from 'styled-components';
import { Search } from 'styled-icons/boxicons-regular';
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;

    margin: 20px 0 40px 0;
`;
export const Content = styled.div`
    width: 265.42px;
    height: 48px;
    background-color: ${(props) => props.theme.colors.background[100]};
    border-radius: 8px;

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 7px 0 12px;
`;
export const SeachIcon = styled(Search)`
    height: 17px;
    width: 17px;

    color: ${(props) => props.theme.colors.text};
`;
export const Input = styled.input`
    width: auto;

    background: none;
    border: none;

    color: ${(props) => props.theme.colors.text};

    margin-left: 0.5rem;

    font-size: 14px;

    &:focus {
        outline: none;
    }
`;
