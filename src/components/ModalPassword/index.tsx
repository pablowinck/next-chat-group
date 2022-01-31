import { useChatContext } from 'contexts/ChatContext';
import { useEffect, useState } from 'react';
import {
    Button,
    Container,
    Content,
    Form,
    Header,
    Input,
    Label
} from './style';

const ModalPassword = () => {
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);
    const [open, setOpen] = useState(false);

    const { selectedChannel, loadMessages, setViewMessages } = useChatContext();

    useEffect(() => {
        setOpen(selectedChannel?.private?.isPrivate);
    }, [selectedChannel]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === selectedChannel.private?.password) {
            setViewMessages(true);
            setOpen(false);
            loadMessages();
        } else {
            setHasError(true);
        }
    };

    if (!open) return null;

    return (
        <Container>
            <Header>
                <span>Enter your password</span>
            </Header>
            <Form onSubmit={handleSubmit}>
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
