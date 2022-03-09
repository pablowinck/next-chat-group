import Overlay from 'components/Overlay';
import { Children, cloneElement, FC, useState } from 'react';
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
   const [channelId, setChannelId] = useState<any>();
   const [open, setOpen] = useState(false);

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (channelId === 0 || !channelId) return;
      //   joinChannel(channelId);
      setOpen(false);
   };
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
                     <Input
                        onChange={(e) => setChannelId(Number(e.target.value))}
                        value={channelId}
                     />
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
