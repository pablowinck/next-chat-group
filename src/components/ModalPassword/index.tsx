import { FC, useState } from 'react';
import { Button, Container, Content, Header, Input, Label } from './style';

interface IProps {
    currentPassword: string;
    setViewMessages: (isValidPassword: boolean) => void;
    setViewModalPassword: (isViewModalPassword: boolean) => void;
}

const ModalPassword: FC<IProps> = ({
    currentPassword,
    setViewMessages,
    setViewModalPassword
}) => {
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleClick = () => {
        if (password === currentPassword) {
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
            <Content>
                <Label>Password</Label>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {hasError && <span>incorrect</span>}
            </Content>
            <Button onClick={handleClick}>Submit</Button>
        </Container>
    );
};

export default ModalPassword;
