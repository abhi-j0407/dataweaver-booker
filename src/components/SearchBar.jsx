const SearchBar = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  )
}

export default SearchBar