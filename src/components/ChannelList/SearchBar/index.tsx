import { Container, Input, SeachIcon } from './style';

const SearchBar = () => {
    return (
        <Container>
            <Input placeholder="Search" />
            <SeachIcon />
        </Container>
    );
};

export default SearchBar;
