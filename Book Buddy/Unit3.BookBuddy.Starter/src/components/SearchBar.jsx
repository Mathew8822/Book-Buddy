import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSearchBook } from '../slice/searchBookSlice';

const SearchBar = () => {
    const dispatch = useDispatch()
    return (
        <TextField
            id="outlined-search"
            label="Search For A Book"
            type="search"
            variant="filled"
            color="primary"
            onChange={e => dispatch(setSearchBook(e.target.value))}
            />
    );
}

SearchBar.propTypes = {
    onSearchChange: PropTypes.func,
};

export default SearchBar;
