/* eslint-disable react/prop-types */
const headers = ["Title", "Author", "Year", "Pages", "Language", "Country"];

const Head = ({ screens, setScreens }) => {

    const updateScreens = (e) => {
        setScreens(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }
    
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
            <input type="text" name={screen} onChange={updateScreens}/>
            <p>||</p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Head;
