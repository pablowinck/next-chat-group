import {
    ConfigurationIcon,
    Container,
    Item,
    LogoutIcon,
    ProfileIcon,
    Separator
} from './style';
const Menu = () => {
    return (
        <Container
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
        >
            <Item>
                <ProfileIcon />
                <span>My Profile</span>
            </Item>
            <Item>
                <ConfigurationIcon />
                <span>Configurations</span>
            </Item>
            <Separator />
            <Item>
                <LogoutIcon className="red" />
                <span className="red">Logout</span>
            </Item>
        </Container>
    );
};

export default Menu;
