import {
   Container,
   SendButton,
   SendIcon,
   TextareaInput,
   TypeInput
} from '../style';
import { Content, Item, Skeleton } from './styles';

const Loading: React.FC = () => {
   return (
      <Container>
         <Content>
            {[...Array(12)].map((_, index) => (
               <Item key={index} className={index % 3 === 0 && 'invert'}>
                  <Skeleton />
                  <Skeleton />
               </Item>
            ))}
         </Content>
         <TypeInput>
            <TextareaInput
               minRows={1}
               maxRows={8}
               placeholder="Type a message here"
            />
            <SendButton type="submit">
               <SendIcon />
            </SendButton>
         </TypeInput>
      </Container>
   );
};

export default Loading;
