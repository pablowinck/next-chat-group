import { useChatContext } from 'contexts/ChatContext';
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

interface IProps {
    setViewMessages: (isValidPassword: boolean) => void;
    setViewModalPassword: (isViewModalPassword: boolean) => void;
}

const ModalPassword: FC<IProps> = ({
    setViewMessages,
    setViewModalPassword
}) => {
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    const { selectedChannel } = useChatContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === selectedChannel.private?.password) {
            setViewMessages(true);
            setViewModalPassword(false);
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
