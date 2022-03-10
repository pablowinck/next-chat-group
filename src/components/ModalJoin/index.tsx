import Overlay from 'components/Overlay';
import { useUserContext } from 'contexts/UserContext';
import { useJoinChannel } from 'hooks/useChannels';
import { Children, cloneElement, FC, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import {
   Button,
   CloseIcon,
   Container,
   Content,
   Footer,
   Form,
   Header,
   Input,
   Label,
   Title
} from './style';

const ModalJoin: FC = ({ children }) => {
   const [channelId, setChannelId] = useState<string>('');
   const [open, setOpen] = useState(false);
   const { user } = useUserContext();
   const mutation = useJoinChannel({ userId: `${user.id}` });
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!channelId || channelId === '0') return;
      mutation.mutate(channelId.trim());
      setOpen(false);
   };

   //!TODO refatorar
   if (mutation.error) {
      console.log(mutation.error);
   }

   return (
      <>
         <ModalJoinTrigger onOpenChange={setOpen}>{children}</ModalJoinTrigger>
         {open && <Overlay onClick={() => setOpen(false)} />}
         {open && (
            <Container>
               <Header>
                  <Title>Join a channel</Title>
                  <CloseIcon onClick={() => setOpen(false)} />
               </Header>
               <Form onSubmit={handleSubmit}>
                  <Content>
                     <Label>Channel ID</Label>
                     <ReactInputMask
                        mask="999999"
                        onChange={(e) => setChannelId(e.target.value)}
                        value={channelId}
                        maskChar=" "
                     >
                        {() => <Input />}
                     </ReactInputMask>
                  </Content>
                  <Footer>
                     <Button type="submit">Join</Button>
                  </Footer>
               </Form>
            </Container>
         )}
      </>
   );
};

type ModalJoinTriggerProps = {
   onOpenChange: (open: boolean) => void;
};

const ModalJoinTrigger: React.FC<ModalJoinTriggerProps> = ({
   children,
   onOpenChange
}) => {
   const child = Children.only(children) as React.ReactElement;

   return cloneElement(child, {
      onClick: () => onOpenChange(true),
      ...child.props
   });
};

export default ModalJoin;
