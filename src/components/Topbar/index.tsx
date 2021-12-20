import { Container, Text } from './style';

const Topbar = ({ topic }: { topic: string }) => {
    return (
        <Container>
            <Text>{topic}</Text>
        </Container>
    );
};

export default Topbar;
