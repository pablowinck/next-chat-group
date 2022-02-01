import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    inset: 0;

    background-color: ${(props) => props.theme.colors.background[800]};
    opacity: 0.5;
`;
