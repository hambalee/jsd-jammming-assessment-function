import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList isRemoval={false} tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  )
}

export default SearchResults