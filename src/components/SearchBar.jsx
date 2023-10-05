import { PropTypes } from "prop-types";

const SearchBar = ({ filterTable }) => {
  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => filterTable("title", e.target.value)}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  filterTable: PropTypes.func,
};

export default SearchBar;
