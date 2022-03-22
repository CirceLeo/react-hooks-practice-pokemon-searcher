import React from "react";

function Search({setSearch}) {

  function updateSearch(event){
    setSearch(search => search = event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={updateSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
