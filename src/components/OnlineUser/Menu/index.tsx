import { useViewContext } from 'contexts/ViewContext';
import {
    ConfigurationIcon,
    Container,
    Item,
    LogoutIcon,
    ProfileIcon,
    Separator
} from './style';
const Menu = () => {
    const { setViewSettings } = useViewContext();

    const handleClick = (view: string) => {
        setViewSettings(view);
    };

    return (
        <Container
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
        >
            <Item onClick={() => handleClick('profile')}>
                <ProfileIcon />
                <span>My Profile</span>
            </Item>
            <Item onClick={() => handleClick('appaerance')}>
                <ConfigurationIcon />
                <span>Appearance</span>
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
