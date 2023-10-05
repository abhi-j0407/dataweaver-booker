import { useState } from "react";
import { PropTypes } from "prop-types";

// Table heads based on our preference, excluding ID, as well as filters and sorts
const headers = ["Title", "Author", "Year", "Pages", "Language", "Country"];

const Head = ({ sortTable, filterTable }) => {
  const [order, setOrder] = useState(false);

  const handleSort = (screen) => {
    sortTable(screen, order);
    setOrder(!order);
  };

  return (
    <div className="head">
      <div className="headers">
        {headers.map((header) => (
          <p key={header}>{header}</p>
        ))}
      </div>
      <form>
        {headers.map((screen) => (
          <div className="filter" key={screen.toLowerCase()}>
            <input
              type="text"
              name={screen.toLowerCase()}
              onChange={(e) => filterTable(e.target.name, e.target.value)}
              placeholder="Fiter..."
            />
            <p onClick={() => handleSort(screen.toLowerCase())}>&#8597;</p>
          </div>
        ))}
      </form>
    </div>
  );
};

Head.propTypes = {
  sortTable: PropTypes.func,
  filterTable: PropTypes.func,
};

export default Head;
