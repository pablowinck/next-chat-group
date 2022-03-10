import { useChatContext } from 'contexts/ChatContext';
import { useUserContext } from 'contexts/UserContext';
import { useFetchChannels } from 'hooks/useChannels';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
   Button,
   Container,
   Content,
   Form,
   Header,
   Input,
   Label
} from './style';

const ModalPassword = () => {
   const [password, setPassword] = useState('');
   const [hasError, setHasError] = useState(false);
   const [open, setOpen] = useState(false);

   const { setViewMessages } = useChatContext();

   const router = useRouter();
   const { user } = useUserContext();

   const { data, isLoading, isError } = useFetchChannels({
      userId: `${user.id}`
   });

   const selectedChannel = data?.find(
      (channel) => channel.id === Number(router.query.channelId)
   );

   useEffect(() => {
      setOpen(selectedChannel?.private?.isPrivate);
   }, [selectedChannel]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (password === selectedChannel.private?.password) {
         setViewMessages(true);
         setOpen(false);
      } else {
         setHasError(true);
      }
   };

   if (!open) return null;

   if (isLoading) return <p>Loading...</p>;
   if (isError || !data) return <p>Error</p>;

   return (
      <Container>
         <Header>
            <span>Enter your password</span>
         </Header>
         <Form onSubmit={handleSubmit}>
            <Content>
               <Label>Password</Label>
               <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               {hasError && <span>incorrect</span>}
            </Content>
            <Button type="submit">Submit</Button>
         </Form>
      </Container>
   );
};

export default ModalPassword;
