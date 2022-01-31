import ModalAdd from 'components/ModalAdd';
import { useViewContext } from 'contexts/ViewContext';
import { FC } from 'react';
import {
    AddIcon,
    AddText,
    Container,
    Content,
    Item,
    JoinIcon,
    JoinText
} from './style';

const ModalAddChannel: FC = () => {
    const { setIsOpenJoin } = useViewContext();

    return (
        <Container
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Content>
                <ModalAdd>
                    <Item>
                        <AddIcon />
                        <AddText>Add Channel</AddText>
                    </Item>
                </ModalAdd>
                <Item onClick={() => setIsOpenJoin(true)}>
                    <JoinIcon />
                    <JoinText>Join Channel</JoinText>
                </Item>
            </Content>
        </Container>
    );
};

export default ModalAddChannel;
