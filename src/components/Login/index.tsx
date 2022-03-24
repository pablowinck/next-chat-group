import { useUserContext } from 'contexts/UserContext';
import React, { useState } from 'react';
import {
    Button,
    CheckInput,
    Container,
    Content,
    ForgotPassword,
    Form,
    Inline,
    Input,
    Label,
    Subtitle,
    Title,
    Wave,
    ErrorMessage
} from './styles';

const Login: React.FC = () => {
    const { setLogged, logged } = useUserContext();
    const [changeEmail, setChangeEmail] = useState('');
    const [changePassword, setChangePassword] = useState('');
    const [invalidEmail, setIsInvalidInputEmail] = useState(false);
    const [invalidPassword, setIsInvalidInputPassword] = useState(false);
    const [messageErrorEmail, setMessageErrorEmail] = useState('');
    const [messageErrorPassword, setMessageErrorPassword] = useState('');
   

    const handleValidatedFields = () => {
        const emailIsValid = /\S+@\S+\.\S+/;
        const passwordIsValid =
            /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

        if (!changeEmail) {
            setIsInvalidInputEmail(true);
            setMessageErrorEmail('empty field');
        } else if (!emailIsValid.exec(changeEmail)) {
            setIsInvalidInputEmail(true);
            setMessageErrorEmail('invalid email format');
        } else {
            setIsInvalidInputEmail(false);
            setMessageErrorEmail('');
        }

        if (!changePassword) {
            setIsInvalidInputPassword(true);
            setMessageErrorPassword('empty field');
            return;
        } else if (!passwordIsValid.exec(changePassword)) {
            setIsInvalidInputPassword(true);
            setMessageErrorPassword(
                'The password must contain uppercase, lowercase, number and at least one special character'
            );
        } else {
            setIsInvalidInputPassword(false);
            setMessageErrorPassword('');
        }

        if (
            emailIsValid.exec(changeEmail) &&
            passwordIsValid.exec(changePassword)
        ) {
            setLogged(!logged);
        } else {
            return;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Container>
            <Content>
                <Title>Sign in</Title>
                <Subtitle>Sign in and start talking</Subtitle>
                <Form onSubmit={handleSubmit}>
                    <Label>login</Label>
                    <Input
                        type="text"
                        autoComplete="login"
                        value={changeEmail}
                        onChange={(event) => setChangeEmail(event.target.value)}
                    />
                    {invalidEmail ? (
                        <ErrorMessage>{messageErrorEmail}</ErrorMessage>
                    ) : (
                        <ErrorMessage style={{ display: 'none' }} />
                    )}
                    <Label>password</Label>
                    <Input
                        type="password"
                        autoComplete="password"
                        value={changePassword}
                        onChange={(event) =>
                            setChangePassword(event.target.value)
                        }
                    />
                    {invalidPassword ? (
                        <ErrorMessage>{messageErrorPassword}</ErrorMessage>
                    ) : (
                        <ErrorMessage style={{ display: 'none' }} />
                    )}

                    <Inline>
                        <div>
                            <CheckInput type="checkbox" /> Remember me
                        </div>
                        <ForgotPassword>Forgot password?</ForgotPassword>
                    </Inline>
                    <Button onClick={handleValidatedFields}>Sign in</Button>
                </Form>
            </Content>
            <Wave />
        </Container>
    );
};

export default Login;
