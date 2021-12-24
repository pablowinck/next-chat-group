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

interface IProps {
    setIsOpenJoin: (value: boolean) => void;
}

const ModalJoin: FC<IProps> = ({ setIsOpenJoin }) => {
    return (
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
    );
};

export default ModalJoin;
