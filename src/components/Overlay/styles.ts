import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    width: 100%;
    height: 100%;

    background-color: ${(props) => props.theme.colors.background[800]};
    opacity: 0.5;

    z-index: 2;
`;
