import React from 'react';
import { Container } from './styles';

interface IProps {
    onClick: () => void;
}

const Overlay: React.FC<IProps> = ({ onClick }) => {
    return <Container onClick={onClick} />;
};

export default Overlay;
