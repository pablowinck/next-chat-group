import { useViewContext } from 'contexts/ViewContext';
import React from 'react';
import { menu } from '..';
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
    menus: menu[];
};

const Navbar: React.FC<Props> = ({ menus }) => {
    const { viewSettings, setViewSettings } = useViewContext();

    return (
        <Container>
            <Title>Settings</Title>
            <Content>
                <Items>
                    {menus.map((menu) => (
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
            </Content>
        </Container>
    );
};

export default Navbar;
