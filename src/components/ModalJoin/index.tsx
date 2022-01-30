import Overlay from 'components/Overlay';
import { useChatContext } from 'contexts/ChatContext';
import { useViewContext } from 'contexts/ViewContext';
import { FC, useState } from 'react';
import {
    Button,
    CloseIcon,
    Container,
    Content,
    Footer,
    Form,
    Header,
    Input,
    Label,
    Title
} from './style';

const ModalJoin: FC = () => {
    const { setIsOpenJoin } = useViewContext();
    const { joinChannel } = useChatContext();
    const [channelId, setChannelId] = useState<any>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (channelId === 0 || !channelId) return;
        joinChannel(channelId);
        setIsOpenJoin(false);
    };
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
                <Form onSubmit={handleSubmit}>
                    <Content>
                        <Label>Channel ID</Label>
                        <Input
                            onChange={(e) =>
                                setChannelId(Number(e.target.value))
                            }
                            value={channelId}
                        />
                    </Content>
                    <Footer>
                        <Button type="submit">Join</Button>
                    </Footer>
                </Form>
            </Container>
        </>
    );
};

export default ModalJoin;
