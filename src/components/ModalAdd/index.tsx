import Overlay from 'components/Overlay';
import { useUserContext } from 'contexts/UserContext';
import { ChannelDto, useCreateChannel } from 'hooks/useChannels';
import { Children, cloneElement, FC, useEffect, useState } from 'react';
import * as Yup from 'yup';
import {
   AvatarChange,
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
} from './style';

const ModalAdd: FC = ({ children }) => {
   const [open, setOpen] = useState(false);
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

   useEffect(() => {
      console.log('mutation', mutation);
   }, [mutation]);

   const initialValues = {
      channelName: '',
      channelTopic: '',
      isPrivate: false,
      password: ''
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

   //!TODO refatorar
   if (mutation.error) alert('Error: ' + mutation.error);

   return (
      <>
         <ModalAddTrigger onOpenChange={setOpen}>{children}</ModalAddTrigger>
         {open && <Overlay onClick={() => setOpen(false)} />}
         {open && (
            <Container>
               <Header>
                  <Title>New Channel</Title>
                  <CloseIcon onClick={() => setOpen(false)} />
               </Header>
               <Content
                  initialValues={initialValues}
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
                        <AvatarChange />
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
                                 className={
                                    !values.isPrivate && 'label-disabled'
                                 }
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
         )}
      </>
   );
};

type ModalAddTriggerProps = {
   onOpenChange: (open: boolean) => void;
};

const ModalAddTrigger: React.FC<ModalAddTriggerProps> = ({
   children,
   onOpenChange
}) => {
   const child = Children.only(children) as React.ReactElement;

   return cloneElement(child, {
      onClick: () => onOpenChange(true),
      ...child.props
   });
};

export default ModalAdd;
