import ModalMessage from 'components/ModalMessage';
import { useUserContext } from 'contexts/UserContext';
import { useDisableAccount, useUpdateProfile } from 'hooks/useProfile';
import React, { useState } from 'react';
import {
   Avatar,
   CancelButton,
   ChangePassword,
   Container,
   Content,
   Error,
   Footer,
   Form,
   GroupButton,
   Input,
   Label,
   LabelTitle,
   RedButton,
   SaveButton,
   Title
} from './styles';

const ProfileContent: React.FC = () => {
   const { user, setUser, setLogged } = useUserContext();
   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState({
      name: '',
      email: '',
      password: ''
   });

   const updateMutation = useUpdateProfile({ userId: `${user.id}` });
   const disableMutation = useDisableAccount({ userId: `${user.id}` });

   const handleChange = (
      value: string,
      set: (value: string) => void,
      type: string
   ) => {
      if (!value || /^\s*$/.test(value)) {
         setErrors({
            ...errors,
            [type]: 'required field'
         });
      } else if (value.length < 4) {
         setErrors({
            ...errors,
            [type]: 'must be at least 4 characters'
         });
      } else {
         setErrors({
            ...errors,
            [type]: ''
         });
      }
      set(value);
   };

   const handleSubmit = () => {
      if (!password) {
         setErrors({
            ...errors,
            ['password']: 'required field'
         });
         return;
      }
      updateMutation.mutate(
         {
            name,
            email,
            password,
            profileImage: user.profileImage
         },
         {
            onSuccess: () => {
               setErrors({
                  name: '',
                  email: '',
                  password: ''
               });
               setUser({
                  ...user,
                  name,
                  email
               });

               setPassword('');
            }
         }
      );
   };

   const handleDisableAcount = () => {
      disableMutation.mutate(password, {
         onSuccess: () => {
            setPassword('')
            localStorage.removeItem('user');
            setTimeout(() => {
               setLogged(false);
            }, 3000);
         }
      });
   };

   return (
      <Container>
         <Title>My Profile</Title>

         <Content>
            <Avatar image={user.profileImage} />

            <Form
               onSubmit={(e) => {
                  e.preventDefault();
               }}
            >
               <LabelTitle>
                  <Label className="mt-0">Name</Label>
                  {errors.name && <Error>{errors.name}</Error>}
               </LabelTitle>
               <Input
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) =>
                     handleChange(e.target.value, setName, 'name')
                  }
                  autoComplete="name"
               />

               <LabelTitle>
                  <Label>Email</Label>
                  {errors.email && <Error>{errors.email}</Error>}
               </LabelTitle>

               <Input
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) =>
                     handleChange(e.target.value, setEmail, 'email')
                  }
                  type="email"
                  autoComplete="email"
               />
               <LabelTitle>
                  <Label>Current Password</Label>
                  {errors.password !== '' && <Error>{errors.password}</Error>}
               </LabelTitle>
               <Input
                  name="password"
                  placeholder="Current Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
               />

               <ChangePassword>Change Password?</ChangePassword>
            </Form>
         </Content>

         <Footer>
            <GroupButton>
               <RedButton onClick={handleDisableAcount}>
                  Disable Account
               </RedButton>
            </GroupButton>
            <GroupButton>
               <CancelButton>Cancel</CancelButton>
               <SaveButton onClick={handleSubmit}>
                  {updateMutation.isLoading ? 'Loading...' : 'Save'}
               </SaveButton>
            </GroupButton>
         </Footer>
         {(updateMutation.isSuccess || disableMutation.isSuccess) && (
            <ModalMessage type="success">Success</ModalMessage>
         )}
         {(updateMutation.isError || disableMutation.isError) && (
            <ModalMessage type="error">{'Incorrect password'}</ModalMessage>
         )}
      </Container>
   );
};

export default ProfileContent;
