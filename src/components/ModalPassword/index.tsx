import { useChatContext } from 'contexts/ChatContext';
import { useViewContext } from 'contexts/ViewContext';
import { FC, useState } from 'react';
import {
    Button,
    Container,
    Content,
    Form,
    Header,
    Input,
    Label
} from './style';

const ModalPassword: FC = () => {
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    const { selectedChannel } = useChatContext();
    const { setViewMessages, setViewPassword } = useViewContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === selectedChannel.private?.password) {
            setViewMessages(true);
            setViewPassword(false);
        } else {
            setHasError(true);
        }
    };

    return (
        <Container>
            <Header>
                <span>Enter your password</span>
            </Header>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Content>
                    <Label>Password</Label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {hasError && <span>incorrect</span>}
                </Content>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    );
};

export default ModalPassword;
