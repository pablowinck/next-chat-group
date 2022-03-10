import { Container, Content } from '../style';
import { Items, Skeleton } from './styles';

const Loading: React.FC = () => {
   return (
      <Container>
         <Content>
            <Items>
               {[...Array(10)].map((_, index) => (
                  <Skeleton key={index} />
               ))}
            </Items>
         </Content>
      </Container>
   );
};

export default Loading;
