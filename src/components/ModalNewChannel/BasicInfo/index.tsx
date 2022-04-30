import { useUserContext } from 'contexts/UserContext';
import { ChannelDto, useCreateChannel } from 'hooks/useChannels';
import React from 'react';
import * as Yup from 'yup';
import {
   ChannelName,
   ChannelPassword,
   ChannelTopic,
   CloseIcon,
   Container,
   Content,
   Form,
   FormContent,
   Header,
   Input,
   IsPrivate,
   Label,
   PrivateContent,
   Submit,
   Title
} from './styles';

type Props = {
   close: () => void;
   setWhoOpen: (state: { basicInfo: boolean; changeAvatar: boolean }) => void;
};

const BasicInfo: React.FC<Props> = ({ close, setWhoOpen }) => {
   const { user } = useUserContext();
   const mutation = useCreateChannel({ userId: `${user.id}` });
   const handleOnSubmit = (values, { resetForm }) => {
      const newChannel: ChannelDto = {
         name: values.channelName,
         topic: values.channelTopic,
         image: '/images/default-avatar.png',
         isPrivate: values.isPrivate,
         password: values.password
      };

      mutation.mutate(newChannel);

      resetForm();
   };

   let validate = Yup.object().shape({
      channelName: Yup.string()
         .required('required field')
         .max(11, 'most 11 caracters'),
      channelTopic: Yup.string()
         .required('required field')
         .max(30, 'most 30 caracters'),
      password: Yup.string().min(4, 'minimum 4 caracters'),
      isPrivate: Yup.boolean()
   });

   //!TODO #49 refactor modalNewChannel error message
   if (mutation.error) alert('Error: ' + mutation.error);
   return (
      <Container>
         <Header>
            <Title>New Channel</Title>
            <CloseIcon onClick={close} />
         </Header>
         <Content
            initialValues={{
               channelName: '',
               channelTopic: '',
               isPrivate: false,
               password: ''
            }}
            validationSchema={validate}
            onSubmit={handleOnSubmit}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               handleSubmit
            }) => (
               <Form
                  onSubmit={(e) => {
                     e.preventDefault();
                     handleSubmit();
                  }}
               >
                  <FormContent>
                     <ChannelName>
                        <Label>Name</Label>
                        <Input
                           name="channelName"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.channelName}
                        />
                        {errors.channelName && touched.channelName && (
                           <Label>{errors.channelName}</Label>
                        )}
                     </ChannelName>
                     <ChannelTopic>
                        <Label>Topic</Label>
                        <Input
                           name="channelTopic"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.channelTopic}
                        />
                        {errors.channelTopic && touched.channelTopic && (
                           <Label>{errors.channelTopic}</Label>
                        )}
                     </ChannelTopic>
                     <ChannelPassword>
                        <Label
                           className={!values.isPrivate && 'label-disabled'}
                        >
                           Password
                        </Label>
                        <Input
                           className={!values.isPrivate && 'disabled'}
                           name="password"
                           type="password"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                           disabled={!values.isPrivate}
                        />
                        {errors.password && touched.password && (
                           <Label>{errors.password}</Label>
                        )}
                     </ChannelPassword>

                     <PrivateContent>
                        <IsPrivate
                           type={'checkbox'}
                           name="isPrivate"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.isPrivate}
                        />
                        <p>Private</p>
                     </PrivateContent>
                  </FormContent>
                  <Submit
                     onClick={() => {
                        console.log(errors);
                        console.log(touched);
                     }}
                     type="submit"
                  >
                     Create
                  </Submit>
               </Form>
            )}
         </Content>
      </Container>
   );
};

export default BasicInfo;
