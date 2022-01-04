import Overlay from 'components/Overlay';
import { useViewContext } from 'contexts/ViewContext';
import React from 'react';
import Navbar from './Navbar';
import { CloseIcon, Container, Content } from './styles';

interface IProps {
    menuSelected: string;
}

const Settings: React.FC<IProps> = ({ menuSelected }) => {
    const { setViewSettings } = useViewContext();

    return (
        <>
            <Overlay onClick={() => setViewSettings('')} />
            <Container>
                <Navbar />
                <Content />
                <CloseIcon />
            </Container>
        </>
    );
};

export default Settings;
