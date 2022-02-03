import { useUserContext } from 'contexts/UserContext';
import React from 'react';
import type { Menu, View } from '..';
import {
    Container,
    Content,
    Icon,
    Item,
    Items,
    LogoutIcon,
    LogoutItem,
    Name,
    Title
} from './styles';

type Props = {
    menus: Menu[];
    viewSettings: View;
    onViewChange: (view: View) => void;
};

const Navbar: React.FC<Props> = ({ menus, viewSettings, onViewChange }) => {
    const { setLogged } = useUserContext();

    return (
        <Container>
            <Title>Settings</Title>
            <Content>
                <Items>
                    {menus.map((menu) => (
                        <Item
                            className={menu.alt === viewSettings && 'active'}
                            onClick={() => onViewChange(menu.alt)}
                            key={menu.id}
                        >
                            <Icon>{menu.icon}</Icon>
                   
                                <Name>{menu.name}</Name>
                       
                        </Item>
                    ))}
                </Items>
                <LogoutItem onClick={() => setLogged(false)}>
                    <LogoutIcon />
                    <p>Logout</p>
                </LogoutItem>
            </Content>
        </Container>
    );
};

export default Navbar;
