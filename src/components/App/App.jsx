import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState, useEffect } from "react";
import Spotify from "../../utils/Spotify";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    // {
    //   name: 'name1',
    //   artist: 'artist1',
    //   album: 'album1',
    //   id: 1,
    // }, {
    //   name: 'name2',
    //   artist: 'artist2',
    //   album: 'album2',
    //   id: 2,
    // }, {
    //   name: 'name3',
    //   artist: 'artist3',
    //   album: 'album3',
    //   id: 3,
    // },
  ])

  const [playlistName, setPlaylistName] = useState('New Playlist')

  const [playlistTracks, setPlaylistTracks] = useState([
    // {
    //   name: 'name4',
    //   artist: 'artist4',
    //   album: 'album4',
    //   id: 4,
    // }, {
    //   name: 'name5',
    //   artist: 'artist5',
    //   album: 'album5',
    //   id: 5,
    // },
  ])

  const addTrack = (track) => {
    // let tracks = [ ...playlistTracks ]
    // if (tracks.find(t => t.id === track.id)) {
    //   return;
    // }
    // tracks.push(track)
    // setPlaylistTracks(tracks)

    setPlaylistTracks(prev => {
      if (prev.find(p => p.id === track.id)) {
        return [...prev]
      } else {
        return [...prev, track]
      }
    })
  }

  const removeTrack = (track) => {
    setPlaylistTracks(prev => {
      return prev.filter(p => p.id !== track.id)
    })
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const savePlaylist = () => {
    // const trackURIs = playlistTracks.map( t => t.uri)
    const trackIds = playlistTracks.map(t => t.id)
    Spotify.savePlaylist(playlistName, trackIds)
    setPlaylistName('New Playlist')
    setPlaylistTracks([])
  }

  const search = async (term) => {
    const result = await Spotify.search(term)
    // console.log(result);
    setSearchResults(result)
  }

  useEffect(() => {
    Spotify.getAccessToken()
  }, [])
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar
          onSearch={search}
        />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
