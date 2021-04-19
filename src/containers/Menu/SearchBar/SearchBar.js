import "./SearchBar.scss";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { matchSorter } from "match-sorter";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const SearchBar = (props) => {
  const changeHandler = (e) => {
    const inputValue = e.target.value;
    props.updateTitles(matchSorter(props.titles, inputValue));
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

const mapStateToProps = (state) => {
  return {
    titles: state.titles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitles: (updatedTitles) =>
      dispatch(actions.updateTitles(updatedTitles)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
