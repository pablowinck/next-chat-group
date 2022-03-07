import Settings, {
    SettingsAppaeranceTrigger,
    SettingsProfileTrigger
} from 'components/Settings';
import { useMenuContext } from 'contexts/MenuContext';
import { useUserContext } from 'contexts/UserContext';
import {
    ConfigurationIcon,
    Container,
    Item,
    LogoutIcon,
    ProfileIcon,
    Separator
} from './style';
const Menu = () => {
    const { setLogged } = useUserContext();
    const { open } = useMenuContext();
    return (
        <Container
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className={!open && 'closed'}
        >
            <Settings>
                <SettingsProfileTrigger>
                    <Item>
                        <ProfileIcon />
                        <span>My Profile</span>
                    </Item>
                </SettingsProfileTrigger>
                <SettingsAppaeranceTrigger>
                    <Item>
                        <ConfigurationIcon />
                        <span>Appearance</span>
                    </Item>
                </SettingsAppaeranceTrigger>
                <Separator />
                <Item onClick={() => setLogged(false)}>
                    <LogoutIcon className="red" />
                    <span className="red">Logout</span>
                </Item>
            </Settings>
        </Container>
    );
};

export default Menu;
