import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    place-items: center;

    background-color: ${(props) => props.theme.colors.background[800]};
    color: ${(props) => props.theme.colors.text};

    position: relative;
`;

export const Content = styled.div`
    width: 30rem;
    height: 50rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    z-index: 1;
`;

export const Title = styled.div`
    font-size: 3rem;
`;
export const Subtitle = styled.div`
    font-size: 1rem;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 0 2rem;
`;
export const Label = styled.label`
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 800;
    margin: 1rem 0 0.3rem 0.5rem;
`;
export const Input = styled.input`
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;

    background: ${(props) => props.theme.colors.background[100]};
    color: ${(props) => props.theme.colors.text};

    transition: all 0.3s ease-in-out;

    &:focus,
    &:hover {
        background: ${(props) => props.theme.colors.background[300]};
    }
`;
export const CheckInput = styled.input``;
export const Inline = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;

    margin: 1rem 0 0.5rem 0;
`;
export const ForgotPassword = styled.div`
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
export const Button = styled.button`
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;

    background: ${(props) => props.theme.colors.primary.dark};
    color: ${(props) => props.theme.colors.text};

    transition: all 0.3s ease-in-out;

    &:hover {
        background: ${(props) => props.theme.colors.primary.main};
    }
`;

export const Wave = styled.div`
    position: absolute;
    bottom: -70px;
    left: 0;
    width: 100%;
    height: 100%;

    background: url('/svg/wave.svg') no-repeat bottom;
`;
