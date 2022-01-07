import styled from 'styled-components';

export const Container = styled.div`
    color: ${(props) => props.theme.colors.text};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`;
export const Selector = styled.select`
    width: 20rem;
    height: 40px;

    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.text};

    border: none;
    border-radius: 8px;

    padding: 0 1rem;
`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: 500;

    margin-bottom: 1rem;
`;
