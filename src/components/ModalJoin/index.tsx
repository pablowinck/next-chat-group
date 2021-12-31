import Overlay from 'components/Overlay';
import { useViewContext } from 'contexts/ViewContext';
import { FC } from 'react';
import {
    Button,
    CloseIcon,
    Container,
    Content,
    Footer,
    Header,
    Input,
    Label,
    Title
} from './style';

const ModalJoin: FC = () => {
    const { setIsOpenJoin } = useViewContext();

    return (
        <>
            <Overlay onClick={() => setIsOpenJoin(false)} />
            <Container
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Header>
                    <Title>Join a channel</Title>
                    <CloseIcon onClick={() => setIsOpenJoin(false)} />
                </Header>
                <Content>
                    <Label>Channel ID</Label>
                    <Input />
                </Content>
                <Footer>
                    <Button>Join</Button>
                </Footer>
            </Container>
        </>
    );
};

export default ModalJoin;
