import "./SearchBar.scss";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = (props) => {
  const changeHandler = (e) => {
    console.log(e.target);
  };
  return (
    <form className="form-group">
      <TextField
        id="searchBar"
        placeholder="Quiz Search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={changeHandler}
        autoFocus={true}
      />
    </form>
  );
};

export default SearchBar;
