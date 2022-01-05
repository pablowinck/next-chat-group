import Overlay from 'components/Overlay';
import { useViewContext } from 'contexts/ViewContext';
import React from 'react';
import AppearanceContent from './AppearanceContent';
import Navbar from './Navbar';
import ProfileContent from './ProfileContent';
import { CloseIcon, Container, Content } from './styles';

export type menu = {
    id: number;
    name: string;
    icon: string;
    alt: string;
};
const Settings: React.FC = () => {
    const { setViewSettings, viewSettings } = useViewContext();

    const menusData: menu[] = [
        {
            id: 1,
            name: 'My Profile',
            icon: 'images/profile',
            alt: 'profile'
        },
        {
            id: 2,
            name: 'Appearance',
            icon: 'image/appearance',
            alt: 'appaerance'
        }
    ];

    return (
        <>
            <Overlay onClick={() => setViewSettings('')} />
            <Container>
                <Navbar menus={menusData} />
                <Content>
                    {viewSettings === menusData[0].alt && <ProfileContent />}
                    {viewSettings === menusData[1].alt && <AppearanceContent />}
                </Content>
                <CloseIcon onClick={() => setViewSettings('')} />
            </Container>
        </>
    );
};

export default Settings;
