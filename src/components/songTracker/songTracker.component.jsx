import React, { useState } from 'react';
import './songTracker.styles.css';

const SongTracker = ({ songCount }) => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongClick = (song) => {
    if (selectedSong === song) {
      setSelectedSong(null);
    } else {
      setSelectedSong(song);
    }
  };

  const handleDateClick = (event) => {
    event.stopPropagation();
    // Handle date click if needed
  };

  // Filter out "Drums" and "Space" from the songCount array
  const filteredSongCount = songCount.filter((song) => song.song !== 'Drums' && song.song !== 'Space');

  return (
    <div>
      <h1>Songs ({songCount.length + 2})</h1>
      {filteredSongCount.map((song) => (
        <div key={song.song}>
          <h3 onClick={() => handleSongClick(song.song)} className='song-count'>
            {song.song} ({song.concerts.length})
          </h3>
          {selectedSong === song.song && (
            <ul className='song-tracker-container'>
              {song.concerts.map((concert, index) => (
                <li key={index} onClick={handleDateClick} className='song-count'>
                  {concert}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SongTracker;

