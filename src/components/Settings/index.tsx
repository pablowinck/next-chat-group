import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import { StyleGuide } from '@styled-icons/fluentui-system-filled/StyleGuide';
import Overlay from 'components/Overlay';
import { useViewContext } from 'contexts/ViewContext';
import React from 'react';
import AppearanceContent from './Content/Appearance';
import ProfileContent from './Content/Profile';
import Navbar from './Navbar';
import { CloseIcon, Container, Content } from './styles';

export type menu = {
    id: number;
    name: string;
    icon: any;
    alt: string;
    view: any;
};
const Settings: React.FC = () => {
    const { setViewSettings, viewSettings } = useViewContext();

    const menusData: menu[] = [
        {
            id: 1,
            name: 'My Profile',
            icon: <UserCircle />,
            alt: 'profile',
            view: <ProfileContent />
        },
        {
            id: 2,
            name: 'Appearance',
            icon: <StyleGuide />,
            alt: 'appaerance',
            view: <AppearanceContent />
        }
    ];

    return (
        <>
            <Overlay onClick={() => setViewSettings('')} />
            <Container
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Navbar menus={menusData} />
                <Content>
                    {menusData.map(
                        (menu) => menu.alt == viewSettings && menu.view
                    )}
                </Content>
                <CloseIcon onClick={() => setViewSettings('')} />
            </Container>
        </>
    );
};

export default Settings;
