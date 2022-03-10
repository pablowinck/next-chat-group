import React from 'react';
import { Container } from '../style';
import { Skeleton } from './styles';

// import { Container } from './styles';

const Loading: React.FC = () => {
   return (
      <Container>
         <Skeleton />
      </Container>
   );
};

export default Loading;
