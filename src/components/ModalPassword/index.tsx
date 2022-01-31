import { useChatContext } from 'contexts/ChatContext';
import { useState } from 'react';
import {
    Button,
    Container,
    Content,
    Form,
    Header,
    Input,
    Label
} from './style';

type ModalPasswordProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onViewMessagesChange: (view: boolean) => void;
};

const ModalPassword = ({
    open,
    onOpenChange,
    onViewMessagesChange
}: ModalPasswordProps) => {
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    const { selectedChannel, loadMessages } = useChatContext();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === selectedChannel.private?.password) {
            onViewMessagesChange(true);
            onOpenChange(false);
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
