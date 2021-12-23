import { FC } from 'react';
import {
    AvatarChange,
    ChannelName,
    ChannelTopic,
    CloseIcon,
    Container,
    Content,
    Form,
    Header,
    Input,
    IsPrivate,
    Label,
    PrivateContent,
    Submit,
    Title
} from './style';

interface props {
    setIsOpenAdd: (value: boolean) => void;
}

const ModalAdd: FC<props> = ({ setIsOpenAdd }) => {
    return (
        <Container
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Header>
                <Title>New Channel</Title>
                <CloseIcon onClick={() => setIsOpenAdd(false)} />
            </Header>
            <Content>
                <Form>
                    <AvatarChange />
                    <ChannelName>
                        <Label>Name</Label>
                        <Input />
                    </ChannelName>
                    <ChannelTopic>
                        <Label>Topic</Label>
                        <Input />
                    </ChannelTopic>

                    <PrivateContent>
                        <IsPrivate type={'checkbox'} /> <p>Private</p>
                    </PrivateContent>
                    <Submit> Create </Submit>
                </Form>
            </Content>
        </Container>
    );
};

export default ModalAdd;
