import React, { useEffect, useState } from 'react';
import { Container } from './styles';

type Props = {
   children: React.ReactNode;
   type: string;
};

const types = ['success', 'error', 'warning'];

const ModalMessage: React.FC<Props> = ({ children, type }) => {
   const [open, setOpen] = useState(true);

   useEffect(() => {
      setOpen(true);
   }, []);

   useEffect(() => {
      if (!open) return;
      if (!types.includes(type)) setOpen(false);
      setTimeout(() => {
         setOpen(false);
      }, 2000);
   }, [setOpen, type, open]);

   return (
      open && (
         <Container
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            type={type}
         >
            {children}
         </Container>
      )
   );
};

export default ModalMessage;
