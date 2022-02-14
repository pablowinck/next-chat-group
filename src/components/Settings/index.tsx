import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import { StyleGuide } from '@styled-icons/fluentui-system-filled/StyleGuide';
import Overlay from 'components/Overlay';
import React, { useState } from 'react';
import AppearanceContent from './Content/Appearance';
import ProfileContent from './Content/Profile';
import Navbar from './Navbar';
import { CloseIcon, Container, Content } from './styles';

export type View = 'profile' | 'appaerance' | undefined;

export type Menu = {
    id: number;
    name: string;
    icon: React.ReactNode;
    alt: View;
    view: React.ReactNode;
};

type SettingsContextValue = {
    view: View;
    onViewChange: (view: View) => void;
};

const SettingsContext = React.createContext<SettingsContextValue | undefined>(
    undefined
);

const Settings: React.FC = ({ children }) => {
    const [viewSettings, setViewSettings] = useState<View>(undefined);
    const [success, setSuccess] = useState(false);
    const menusData: Menu[] = [
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
            <SettingsContext.Provider
                value={{ view: viewSettings, onViewChange: setViewSettings }}
            >
                {children}
                {viewSettings !== undefined && (
                    <Overlay onClick={() => setViewSettings(undefined)} />
                )}
                {viewSettings !== undefined && (
                    <Container>
                        <Navbar
                            menus={menusData}
                            onViewChange={setViewSettings}
                            viewSettings={viewSettings}
                        />
                        <Content>
                            {menusData.map(
                                (menu) => menu.alt == viewSettings && menu.view
                            )}
                        </Content>
                        <CloseIcon onClick={() => setViewSettings(undefined)} />
                    </Container>
                )}
            </SettingsContext.Provider>
            
        </>
    );
};

export const SettingsProfileTrigger: React.FC = ({ children }) => {
    const context = React.useContext(SettingsContext);

    const child = React.Children.only(children) as React.ReactElement;

    return React.cloneElement(child, {
        onClick: () => context.onViewChange('profile'),
        ...child.props
    });
};

export const SettingsAppaeranceTrigger: React.FC = ({ children }) => {
    const context = React.useContext(SettingsContext);

    const child = React.Children.only(children) as React.ReactElement;

    return React.cloneElement(child, {
        onClick: () => context.onViewChange('appaerance'),
        ...child.props
    });
};

export default Settings;
