import styled from 'styled-components';
export const Container = styled.div<{isLoggedUser: boolean}>`
    display: flex;

    width: 100%;

    align-items: start;
    justify-content: ${props=> props.isLoggedUser ? 'end' : 'start'};
    flex-flow: ${props=> props.isLoggedUser ? 'row-reverse' : 'row'};
    gap: 20px;

    margin-top: 38px;

    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
`;
export const Avatar = styled.div`
    width: 42px;
    height: 42px;

    border-radius: 50%;

    background-color: ${(props) => props.theme.colors.background[100]};

    user-select: none;

    img {
        width: 100%;
        height: 100%;

        border-radius: 50%;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Header = styled.div<{isLoggedUser: boolean}>`
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 12px;

    display: flex;
    flex-flow: ${props=> props.isLoggedUser ? 'row-reverse' : 'row'};
    gap: 10px;
`;
export const Name = styled.div`
    font-weight: 700;

    user-select: none;
`;
export const Time = styled.div`
    user-select: none;
`;
export const Text = styled.div<{isLoggedUser: boolean}>`
    text-align: ${
        props=> props.isLoggedUser ? 'right' : 'left'

    };
`;
