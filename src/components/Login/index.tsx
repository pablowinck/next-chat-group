import { useUserContext } from 'contexts/UserContext';
import React from 'react';
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
    Wave
} from './styles';

const Login: React.FC = () => {
    const { setLogged } = useUserContext();

    return (
        <Container>
            <Content>
                <Title>Sign in</Title>
                <Subtitle>Sign in and start talking</Subtitle>
                <Form>
                    <Label>login</Label>
                    <Input type="text" autoComplete="login" />
                    <Label>password</Label>
                    <Input type="password" autoComplete="password" />
                    <Inline>
                        <div>
                            <CheckInput type="checkbox" /> Remember me
                        </div>
                        <ForgotPassword>Forgot password?</ForgotPassword>
                    </Inline>
                    <Button onClick={() => setLogged(true)}>Sign in</Button>
                </Form>
            </Content>
            <Wave />
        </Container>
    );
};

export default Login;
