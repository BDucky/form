import { Input } from 'antd';

type SearchBarProps = {
    onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
    return <Input.Search placeholder="Search by name" onSearch={onSearch} />;
};

export default SearchBar;