import axios from 'axios';
import Wave from 'components/Wave';
import { useUserContext } from 'contexts/UserContext';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    CheckInput,
    Container,
    Content,
    ForgotPassword,
    Form,
    Inline,
    Input,
    Label,
    SignIn,
    SignOut,
    Subtitle,
    Title
} from './styles';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setLogged, setUser } = useUserContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post('http://localhost:3000/users/login', {
                email,
                password
            })
            .then((res) => {
                console.log(res);

                if (res.status == 201) {
                    setLogged(true);
                    setUser(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container>
            <Content>
                <Title>Sign in</Title>
                <Subtitle>Sign in and start talking</Subtitle>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Label>Email</Label>
                    <Input
                        type="text"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Label>password</Label>
                    <Input
                        type="password"
                        autoComplete="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Inline>
                        <div>
                            <CheckInput type="checkbox" /> Remember me
                        </div>
                        <ForgotPassword>Forgot password?</ForgotPassword>
                    </Inline>
                    <SignIn type="submit">Sign in</SignIn>
                    <Link href="/signup" passHref>
                        <SignOut type="button">Sign up</SignOut>
                    </Link>
                </Form>
            </Content>
            <Wave />
        </Container>
    );
};
export default Login;
