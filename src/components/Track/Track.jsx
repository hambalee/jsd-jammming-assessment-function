import './Track.css'

const Track = (props) => {
  const { name, artist, album, id } = props.track
  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button
          className="Track-action"
          onClick={removeTrack}
        >-</button>
      )
    } else {
      return (
        <button
          className="Track-action"
          onClick={addTrack}
        >+</button>
      )
    }
  }

  const addTrack = () => {
    props.onAdd(props.track)
  }

  const removeTrack = () => {
    props.onRemove(props.track)
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p> {artist} | {album} </p>
      </div>
        {renderAction()}
    </div>
  )
}

export default Track