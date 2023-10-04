import { useState } from "react";

/* eslint-disable react/prop-types */
const headers = ["Title", "Author", "Year", "Pages", "Language", "Country"];

const Head = ({ screens, setScreens, sortTable }) => {
  const [order, setOrder] = useState(false);

  const updateScreens = (e) => {
    setScreens((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSort = (screen) => {
    console.log("Screen: ", screen);
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
        {Object.keys(screens).map((screen) => (
          <div className="filter" key={screen}>
            <input
              type="text"
              name={screen}
              onChange={updateScreens}
              placeholder="Fiter..."
            />
            <p onClick={() => handleSort(screen)}>&#8597;</p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Head;
