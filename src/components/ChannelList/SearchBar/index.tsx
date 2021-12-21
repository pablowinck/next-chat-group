import { Container, Input, SeachIcon } from './style';

interface props {
    setFilter: (filter: string) => void;
}

const SearchBar = ({ setFilter }) => {
    return (
        <Container>
            <Input
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search"
            />
            <SeachIcon />
        </Container>
    );
};

export default SearchBar;
