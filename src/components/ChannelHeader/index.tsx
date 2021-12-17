import { AddIcon, Container, Rounded } from './style';

const ChannelHeader = () => {
    return (
        <Container>
            <span>Channels</span>

            <Rounded>
                <AddIcon />
            </Rounded>
        </Container>
    );
};

export default ChannelHeader;
