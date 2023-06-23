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

  console.log(songCount)

  return (
    <div>
      <h1>Songs</h1>
      {Object.entries(songCount).map(([song, dates]) => (
        <div key={song}>
          <h3 onClick={() => handleSongClick(song)}>
            {song} ({dates.length})
          </h3>
          {selectedSong === song && (
            <ul>
              {dates.map((date, index) => (
                <li key={index} onClick={handleDateClick}>
                  {date}
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