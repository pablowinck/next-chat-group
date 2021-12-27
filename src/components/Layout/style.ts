import styled from 'styled-components';

// CH -  Channel Header
// CL -  Channel List
// TP -  Top bar
// MS -  Messages
// ON -  Online User

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 324px auto;
    grid-template-rows: 59.49px auto 75.42px;
    grid-template-areas: 'CH TP' 'CL MS' 'ON MS';
    height: 100vh;

    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: auto auto;
        grid-template-rows: 59.49px auto auto;
        grid-template-areas: 'TP TP' 'MS MS' 'MS MS';
    }
`;
