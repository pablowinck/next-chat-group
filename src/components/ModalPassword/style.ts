import styled from 'styled-components';
export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    padding: 1rem 2rem;

    height: 13rem;
    width: 20rem;

    background-color: ${(props) => props.theme.colors.background[800]};
    border-radius: 18px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const Label = styled.label`
    color: ${(props) => props.theme.colors.text};
    margin-left: 0.5rem;
`;
export const Input = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0 0.5rem;

    border: none;
    border-radius: 12px;

    background-color: ${(props) => props.theme.colors.background[100]};
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;

    transition: background-color 0.3s ease-in-out;

    &:hover,
    &:focus {
        background-color: ${(props) => props.theme.colors.background[300]};
    }
`;
export const Button = styled.button`
    height: 3rem;
    width: 100%;

    border: none;
    border-radius: 12px;
    cursor: pointer;

    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};

    font-size: 0.8rem;
    font-weight: 700;

    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark};
    }
`;

export const Content = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    span {
        margin-left: 0.5rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.error};
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        color: ${(props) => props.theme.colors.text};
        font-weight: 700;
        text-transform: uppercase;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

// export const CloseIcon = styled(CloseSquare)`
//     width: 2rem;
//     color: ${(props) => props.theme.colors.text};

//     cursor: pointer;

//     transition: color 0.3s ease-in-out;

//     &:hover {
//         color: ${(props) => props.theme.colors.secondary};
//     }
// `;
