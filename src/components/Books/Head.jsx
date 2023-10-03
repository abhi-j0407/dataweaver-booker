const headers = ["Title", "Author", "Year", "Pages", "Language", "Country"]

const Filter = () => (
    <div className="filter"><input type="text" />
    <p>||</p></div>
)

const Head = () => {
  return (
      <div className="head">
          <div className="headers">
              {headers.map(header => <p key={header}>{header}</p>)}
          </div>
          <form>
              {headers.map(header => <Filter key={header}/>)}
          </form>
      </div>
  )
}

export default Head