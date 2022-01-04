import { useViewContext } from 'contexts/ViewContext';
import React from 'react';
import {
    Container,
    Icon,
    Item,
    Items,
    LogoutIcon,
    LogoutItem,
    Name
} from './styles';

const Navbar: React.FC = () => {
    const { viewSettings, setViewSettings } = useViewContext();

    type menu = {
        id: number;
        name: string;
        icon: string;
        alt: string;
    };

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
        <Container>
            <Items>
                {menusData.map((menu) => (
                    <Item
                        className={menu.alt === viewSettings && 'active'}
                        onClick={() => setViewSettings(menu.alt)}
                        key={menu.id}
                    >
                        <Icon />
                        <Name>{menu.name}</Name>
                    </Item>
                ))}
            </Items>
            <LogoutItem>
                <LogoutIcon />
                <p>Logout</p>
            </LogoutItem>
        </Container>
    );
};

export default Navbar;
