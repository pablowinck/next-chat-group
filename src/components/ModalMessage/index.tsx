import React, { useEffect } from 'react';
import { Container } from './styles';

type Props = {
    children: React.ReactNode;
    type: string;
    open: boolean;
    setOpen: (value: boolean) => void;
}

const types = [
    'success',
    'error',
    'warning',
]

const ModalMessage: React.FC<Props> = ({ children, type, open, setOpen }) => {
    useEffect(() => {
        if(!types.includes(type)) setOpen(false);
        setTimeout(() => {
            setOpen(false);
        }, 2000);
    }, [setOpen, type]);

    return open && <Container 
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0 }}
    type={type}>{children}</Container>;
};

export default ModalMessage;
