import styled from 'styled-components';
export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    width: 1420px;
    height: 770px;
    border-radius: 18px;
    background-color: ${(props) => props.theme.colors.background[800]};

    display: grid;
    grid-template-columns: 270px auto;
    grid-template-rows: auto;
    grid-template-areas: 'navbar content';

    z-index: 100;
`;
export const Content = styled.div``;
