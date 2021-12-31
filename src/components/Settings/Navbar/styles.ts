import styled from 'styled-components';

export const Container = styled.div`
    grid-area: navbar;

    height: 100%;
    width: 100%;

    border-radius: 18px 0 0 18px;
    padding: 3rem 1rem;

    background-color: ${(props) => props.theme.colors.background[100]};

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

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
`;
export const Icon = styled.div`
    height: 30px;
    width: 30px;

    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.background[300]};
`;
export const Name = styled.span`
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};

    user-select: none;
`;
