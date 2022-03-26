import React from 'react';
import { Container } from './styles';

interface IProps {
   onClick: () => void;
}

const Overlay: React.FC<IProps> = ({ onClick }) => {
   return (
      <Container
         onClick={onClick}
         initial={{
            opacity: 0
         }}
         animate={{
            opacity: 1
         }}
         transition={{
            duration: 0.5
         }}
      />
   );
};

export default Overlay;
