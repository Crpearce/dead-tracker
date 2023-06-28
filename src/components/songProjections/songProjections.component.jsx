import React from 'react';
import './songProjections.styles.css'

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

  return (
    <div>
      <h2 className='potential-header'>Potential Upcoming Songs</h2>
      <ul className='potential-songs-container'>
        {potentialSongs.map(song => (
          <li key={song.song} className='potential-song'>{song.song} ({song.concerts.length})</li>
        ))}
      </ul>
    </div>
  );
};

export default SongProjections;

