import styled from 'styled-components';
export const Container = styled.div`
    grid-area: TP;

    background-color: ${(props) => props.theme.colors.background[300]};

    display: flex;
    justify-content: start;
    align-items: center;

    padding: 0 78px;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
export const Text = styled.span`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors.text};
`;

export const ChannelId = styled.span`
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.secondary};
    margin-left: 0.5rem;
`;
