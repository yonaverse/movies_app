const Search = ({ searchterm, setSearchterm }) => {
  return (
    <div className="search">
      <div>
        <img src="/assets/search.png" alt="search" />
        <input
          type="text"
          placeholder="search your favorite movies"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
