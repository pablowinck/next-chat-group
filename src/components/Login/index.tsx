import { useUserContext } from 'contexts/UserContext';
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
               localStorage.setItem('user', JSON.stringify(res.data));
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
};
export default Login;
