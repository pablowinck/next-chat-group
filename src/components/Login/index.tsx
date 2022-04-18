import { useUserContext } from 'contexts/UserContext';
<<<<<<< HEAD
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import api from 'utils/api';
import { ParticleOptions } from './ParticleOptions';
import {
   Bottom,
   CheckInput,
   Container,
   Content,
   DontHaveAccount,
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
   const { setLogged, setUser, user } = useUserContext();
   const [email, setEmail] = useState(user ? user.email : '');
   const [password, setPassword] = useState('');
   const [checked, setChecked] = useState(user ? true : false);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const router = useRouter();
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      await api
         .post('users/login', {
            email,
            password
         })
         .then((res) => {
            if (res.status == 201) {
               setLogged(true);
               setUser(res.data);
               router.push('/chat');
            }
         })
         .catch((err) => {
            setError(true);
            setLoading(false);
         });
   };

   useEffect(() => {
      if (!error) return;
      const seconds = 3 * 1000; // 3 seconds
      setTimeout(() => {
         setError(false);
      }, seconds);
   });

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
                     <CheckInput
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                     />{' '}
                     Remember me
                  </div>
                  <ForgotPassword>Forgot password?</ForgotPassword>
               </Inline>
               <SignIn type="submit">
                  {loading ? 'loading...' : 'Sign in'}
               </SignIn>
               <Bottom>
                  {error && <p className="error">Invalid email or password</p>}
                  <DontHaveAccount>
                     <p>{`Don't have an account yet?`}</p>
                     <Link href="/signup" passHref>
                        <SignOut>Sign up</SignOut>
                     </Link>
                  </DontHaveAccount>
               </Bottom>
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
=======
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
>>>>>>> main
};
export default Login;
