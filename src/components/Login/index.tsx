import axios from 'axios';
import { useUserContext } from 'contexts/UserContext';
import Link from 'next/link';
import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { ParticleOptions } from './ParticleOptions';
import {
    CheckInput,
    Container,
    Content,
    Footer,
    ForgotPassword,
    Form,
    GithubIcon,
    Inline,
    Input,
    Label,
    LinkedinIcon,
    SignIn,
    SignOut,
    Subtitle,
    Title,
    TwitchIcon
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
            <Particles options={ParticleOptions} />
            <Content>
                <Title>Sign in</Title>
                <Subtitle>Connect now with the world</Subtitle>
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
            <Footer>
                <Link href="https://github.com/pablowinck" passHref>
                    <GithubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/pablowinck/" passHref>
                    <LinkedinIcon />
                </Link>
                <Link href="https://www.twitch.tv/devpablowinter" passHref>
                    <TwitchIcon />
                </Link>
            </Footer>
        </Container>
    );
};
export default Login;
