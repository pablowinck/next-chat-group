import ModalPassword from 'components/ModalPassword';
import { useChatContext } from 'contexts/ChatContext';
import { Message, useFetchMessages } from 'hooks/useMessages';
import { useEffect, useRef } from 'react';
import { messageUtils } from 'utils/messageUtils';
import MessageItem from './MessageItem';
import {
   Children,
   Container,
   Content,
   DateSeparator,
   SendButton,
   SendIcon,
   TextareaInput,
   TypeInput
} from './style';

type Props = {
   channelId: string;
};

const Messages: React.FC<Props> = ({ channelId }) => {
   const { selectedChannel, addMessage, viewMessages, setViewMessages } =
      useChatContext();

   const { isLoading, data } = useFetchMessages({
      channelId
   });

   const messageInput = useRef<HTMLTextAreaElement>();

   useEffect(() => {
      setViewMessages(!selectedChannel?.private?.isPrivate);
   }, [selectedChannel, setViewMessages]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addMessage(messageInput.current.value);
      messageInput.current.value = '';
   };

   const scrollBottom = (e: React.SyntheticEvent) => {
      e.currentTarget.scrollTop = e.currentTarget.scrollHeight;
   };

   const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey) return;

      if (event.code === 'Enter') {
         handleSubmit(event);
      }
   };

   const { orderByDate, orderByCreatedAt } = messageUtils;

   const orderMessages = (currentMessages: Message[]) => {
      return orderByDate(orderByCreatedAt(currentMessages));
   };

   //!TODO create skeleton
   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <Container>
            <Content onLoad={scrollBottom}>
               <Children>
                  {viewMessages &&
                     orderMessages(data).map((message, index) => {
                        if (message?.type === 'date') {
                           return (
                              <DateSeparator key={index}>
                                 <span>
                                    {message.date.toLocaleDateString('pt-BR') ==
                                    new Date().toLocaleDateString('pt-BR')
                                       ? 'HOJE'
                                       : message.date.toLocaleDateString(
                                            'pt-BR'
                                         )}
                                 </span>
                              </DateSeparator>
                           );
                        } else {
                           return (
                              <div key={index}>
                                 <MessageItem message={message} />
                              </div>
                           );
                        }
                     })}
               </Children>
            </Content>

            <TypeInput onSubmit={handleSubmit}>
               <TextareaInput
                  minRows={1}
                  maxRows={8}
                  placeholder="Type a message here"
                  onKeyDown={handleKeyDown}
                  ref={messageInput}
               />
               <SendButton type="submit">
                  <SendIcon />
               </SendButton>
            </TypeInput>
         </Container>

         <ModalPassword />
      </>
   );
};

export default Messages;
