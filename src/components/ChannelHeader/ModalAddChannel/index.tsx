import ModalAdd from 'components/ModalAdd';
import ModalJoin from 'components/ModalJoin';
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
                <ModalJoin>
                    <Item>
                        <JoinIcon />
                        <JoinText>Join Channel</JoinText>
                    </Item>
                </ModalJoin>
            </Content>
        </Container>
    );
};

export default ModalAddChannel;
