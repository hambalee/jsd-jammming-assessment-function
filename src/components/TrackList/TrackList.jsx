import './TrackList.css'
import Track from '../Track/Track'

const TrackList = (props) => {
  const { tracks } = props
  let trackLists
  if (tracks) {
    trackLists = tracks.map(track => {
      return (
        <Track
          track={track}
          key={track.id}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          isRemoval={props.isRemoval}
        />
      )
    })
  }

  return (
    <div className="TrackList">
      {trackLists}
    </div>
  )
};

export default TrackList;
