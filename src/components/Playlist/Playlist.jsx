import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist = (props) => {
  const { playlistName, playlistTracks } = props

  const handleNameChange = (e) => {
    props.onNameChange(e.target.value)
  }
  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList
        tracks={playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button
        className="Playlist-save"
        onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  )
}

export default Playlist