import './SearchBar.css'

const SearchBar = (props) => {
  // const [term, setTerm] = useState({})
  const search = (val) => {
    props.onSearch(val)
  }

  const handleTermChange = (e) => {
    search(e.target.value)
  }
  return (
    <div className="SearchBar">
      <input 
      placeholder="Enter A Song, Album, or Artist" 
      onChange={handleTermChange}
      />
      <button className="SearchButton">SEARCH</button>
    </div>
  )
}

export default SearchBar