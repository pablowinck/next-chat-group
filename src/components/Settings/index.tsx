import Overlay from 'components/Overlay';
import { useViewContext } from 'contexts/ViewContext';
import React from 'react';
import Navbar from './Navbar';
import { Container, Content } from './styles';

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
            </Container>
        </>
    );
};

export default Settings;
