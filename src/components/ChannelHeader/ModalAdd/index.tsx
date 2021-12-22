import { Button } from '@mui/material';
import { FC } from 'react';
import {
    ChannelName,
    ChannelTopic,
    CloseIcon,
    Container,
    Content,
    Form,
    Header,
    IsPrivate,
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
                    <ChannelName variant="outlined" label="Channel Name" />
                    <ChannelTopic variant="outlined" label="Channel Topic" />
                    <Button variant="contained" component="label">
                        Channel Image
                        <input type="file" hidden />
                    </Button>

                    <PrivateContent>
                        <IsPrivate /> <p>Private</p>
                    </PrivateContent>
                    <Submit variant="contained"> Enviar </Submit>
                </Form>
            </Content>
        </Container>
    );
};

export default ModalAdd;
