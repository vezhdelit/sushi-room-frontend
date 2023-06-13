import React from "react";
import debounce from "lodash.debounce";

import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux/slices/filterSlice";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 750),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.search}>
      <SearchIcon className={styles.searchIcon} fontSize="small" />

      <input
        value={value}
        className={styles.input}
        type="text"
        placeholder="Пошук..."
        onChange={onChangeInput}
      />
      {value && (
        <ClearIcon
          className={styles.clearIcon}
          onClick={onClickClear}
          fontSize="small"
        />
      )}
    </div>
  );
};

export default Search;
