import React, { useState } from 'react';
import './songProjections.styles.css';

const SongProjections = ({ concerts, songs }) => {
  // Get the IDs of the 4 most recent concerts
  const recentConcerts = concerts.slice(-3);

  // Get all the songs played in the recent concerts
  const playedSongs = recentConcerts.flatMap(concert => [
    ...concert.set1,
    ...concert.set2,
    ...concert.encore
  ]);

  // Filter out the songs that have been played in the recent concerts
  const potentialSongs = songs.filter(song => !playedSongs.includes(song.song));

  // State to manage expanded song dropdowns
  const [expandedSongs, setExpandedSongs] = useState([]);

  const toggleExpansion = song => {
    if (expandedSongs.includes(song)) {
      setExpandedSongs(expandedSongs.filter(s => s !== song));
    } else {
      setExpandedSongs([...expandedSongs, song]);
    }
  };

  return (
    <div>
      <h2 className="potential-header">Potential Upcoming Songs</h2>
      <ul className="potential-songs-container">
        {potentialSongs.map(song => (
          <li key={song.song} className="potential-song">
            <div className="song-header" onClick={() => toggleExpansion(song)}>
              {song.song} ({song.concerts.length})
            </div>
            {expandedSongs.includes(song) && (
              <ul className="concert-info">
                {song.concerts.map(concert => (
                  <li key={concert} className='recent-concert'>{concert}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongProjections;


