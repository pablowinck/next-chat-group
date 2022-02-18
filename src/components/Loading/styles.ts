import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;

    background: ${(props) => props.theme.colors.primary.main};
`;
export const Content = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(12px);

    display: grid;
    place-items: center;

    z-index: 1;

    font-size: 1.5rem;
`;
export const WomanSvg = styled.img`
    position: absolute;
    z-index: 0;
    bottom: 0;
`;
