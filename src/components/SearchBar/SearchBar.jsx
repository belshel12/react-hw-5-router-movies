import { useState } from "react";

const SearchBar = ({ setParams }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setParams({});
      return;
    }
    setParams({ filter: value.toLowerCase().trim() });
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchBar;
