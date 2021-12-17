import { Container, Content, Input, SeachIcon } from './style';

const SearchBar = () => {
    return (
        <Container>
            <Content>
                <SeachIcon />
                <Input placeholder="Search" />
            </Content>
        </Container>
    );
};

export default SearchBar;
