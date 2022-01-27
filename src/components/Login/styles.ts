import { Github } from '@styled-icons/bootstrap/Github';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Twitch } from '@styled-icons/bootstrap/Twitch';
import styled from 'styled-components';
export const Container = styled.div`
    height: 100vh;
    width: 100%;

    background-color: ${(props) => props.theme.colors.background[800]};
    color: ${(props) => props.theme.colors.text};

    position: relative;
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 30rem;
    height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    backdrop-filter: blur(20px);

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

const Button = styled.button`
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;

    background: ${(props) => props.theme.colors.primary.dark};
    color: ${(props) => props.theme.colors.text};

    transition: all 0.3s ease-in-out;

    margin-top: 0.75rem;

    &:hover {
        background: ${(props) => props.theme.colors.primary.main};
    }

    text-transform: uppercase;
`;

export const SignIn = styled(Button)``;

export const SignOut = styled(Button)`
    background: ${(props) => props.theme.colors.secondary};
    &:hover {
        background: ${(props) => props.theme.colors.primary.dark};
    }
`;

export const Footer = styled.div`
    position: fixed;
    z-index: 10;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const widthIcon = '1.5rem';

export const GithubIcon = styled(Github)`
    width: ${widthIcon};
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
export const LinkedinIcon = styled(Linkedin)`
    width: ${widthIcon};
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
export const TwitchIcon = styled(Twitch)`
    width: ${widthIcon};
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
