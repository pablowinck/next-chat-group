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
    const { setIsOpenAdd, setIsOpenJoin } = useViewContext();

    return (
        <Container
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Content>
                <Item onClick={() => setIsOpenAdd(true)}>
                    <AddIcon />
                    <AddText>Add Channel</AddText>
                </Item>
                <Item onClick={() => setIsOpenJoin(true)}>
                    <JoinIcon />
                    <JoinText>Join Channel</JoinText>
                </Item>
            </Content>
        </Container>
    );
};

export default ModalAddChannel;
