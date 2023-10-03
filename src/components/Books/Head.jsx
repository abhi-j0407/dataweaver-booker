const headers = ["Title", "Author", "Year", "Pages", "Language", "Country"]

const Head = () => {
  return (
      <div className="head">
          <div className="headers">
              {headers.map(header => <p key={header}>{header}</p>)}
        </div>
      </div>
  )
}

export default Head