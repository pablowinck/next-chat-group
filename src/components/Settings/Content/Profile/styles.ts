import styled from 'styled-components';

export const Container = styled.div`
    color: ${(props) => props.theme.colors.text};

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas: 'header' 'content' 'footer';

    height: 100%;
    width: 100%;

    padding: 0 5rem;
`;
export const Title = styled.div`
    grid-area: header;

    padding-top: 1rem;

    font-size: 1.5rem;

    user-select: none;
`;
export const Content = styled.div`
    grid-area: content;

    display: grid;
    grid-template-columns: 8rem auto;
    grid-gap: 1rem;
`;
export const Avatar = styled.div<{ image: string }>`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;

    background: ${(props) =>
        props.image !== ''
            ? `url(${props.image}) no-repeat center`
            : props.theme.colors.secondary};
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.background[100]};
    }

    ::after {
        content: 'upload a photo';
        padding: 0.5rem;
        font-size: 1rem;

        z-index: ${(props) => (props.image === '' ? '1' : '-1')};

        color: ${(props) => props.theme.colors.text};
        text-transform: uppercase;
        text-align: center;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;

    .mt-0 {
        margin-top: 0 !important;
    }
`;
export const Label = styled.label`
    user-select: none;

    font-size: 1rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.secondary};

    margin: 2rem 0 0.5rem 0.5rem;

    ::after {
        content: '*';
        font-size: 0.8rem;
        color: ${(props) => props.theme.colors.red[700]};
    }
`;
export const Input = styled.input`
    height: 3rem;
    width: 100%;
    padding: 0 1rem;

    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.colors.background[100]};
    color: ${(props) => props.theme.colors.text};
    letter-spacing: 0.1rem;

    transition: all 0.3s ease-in-out;

    &:focus,
    &:hover {
        background-color: ${(props) => props.theme.colors.background[300]};
    }
`;

export const ChangePassword = styled.p`
    color: ${(props) => props.theme.colors.text};
    background: none;
    border: none;
    font-size: 0.8rem;
    margin: 0.5rem 0 0 1rem;

    cursor: pointer;
`;

export const Footer = styled.div`
    grid-area: footer;

    display: flex;
    justify-content: space-between;
    align-items: end;

    padding: 2rem 0;
`;
export const RedButton = styled.button`
    height: 3rem;

    padding: 0 1rem;
    margin-left: 1rem;

    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.red[700]};
    background: none;
    color: ${(props) => props.theme.colors.red[700]};

    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.red[700]};
        color: ${(props) => props.theme.colors.text};
    }
`;
export const CancelButton = styled.button`
    height: 3rem;

    margin-right: 1rem;
    padding: 0 1rem;

    background: none;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 8px;
    color: ${(props) => props.theme.colors.text};

    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        border: 1px solid ${(props) => props.theme.colors.text};
    }
`;
export const SaveButton = styled.button`
    height: 3rem;

    padding: 0 1rem;

    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.text};
    border: none;
    border-radius: 8px;

    cursor: pointer;

    font-size: 1rem;
    font-weight: 500;

    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }
`;

export const GroupButton = styled.div``;

export const LabelTitle = styled.div`
    display: flex;
    align-items: end;
    gap: 0.5rem;
`;
export const Error = styled.div`
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.red[700]};
    margin-bottom: 0.5rem;
`;
