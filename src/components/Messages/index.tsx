import ModalPassword from 'components/ModalPassword';
import { useChatContext } from 'contexts/ChatContext';
import { useUserContext } from 'contexts/UserContext';
import { useFetchChannels } from 'hooks/useChannels';
import { Message, useFetchMessages } from 'hooks/useMessages';
import { useEffect, useRef } from 'react';
import { messageUtils } from 'utils/messageUtils';
import Loading from './Loading';
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
   const { addMessage, viewMessages, setViewMessages } = useChatContext();

   const { user } = useUserContext();

   const fetchChannels = useFetchChannels({
      userId: `${user.id}`
   });

   const selectedChannel = fetchChannels?.data?.find(
      (channel) => channel.id === Number(channelId)
   );

   const { isLoading, data } = useFetchMessages({
      channelId
   });

   const messageInput = useRef<HTMLTextAreaElement>();

   useEffect(() => {
      setViewMessages(!selectedChannel?.private?.isPrivate);
   }, [selectedChannel, setViewMessages]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const { id } = JSON.parse(localStorage.getItem('user'));
      addMessage({ message: messageInput.current.value, userId: `${id}` });
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

   if (isLoading) {
      return <Loading />;
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
