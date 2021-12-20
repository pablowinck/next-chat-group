import styled from 'styled-components';
export const Container = styled.div`
    grid-area: CL;

    background-color: ${(props) => props.theme.colors.background[400]};

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    background-color: ${(props) => props.theme.colors.background[400]};
`;
export const SearchBar = styled.div``;
export const Channels = styled.div``;
