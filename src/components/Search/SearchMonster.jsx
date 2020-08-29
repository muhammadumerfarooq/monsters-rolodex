import React from "react";

const SearchMonster = (props) => {
    const {searchText, changeSearchText} = props
  return (
    <div>
      <input
        type="text"
        className="textField"
        placeholder="Search Monster"
        value={searchText}
        onChange={changeSearchText}
      />
    </div>
  );
};

export default SearchMonster;