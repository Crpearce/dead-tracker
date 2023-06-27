import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import ConcertForm from './components/concertForm/concertForm.component';
import SongTracker from './components/songTracker/songTracker.component';
import SongProjections from './components/songProjections/songProjections.component';

import { concerts } from '../src/data';
import Concert from './components/concert/concert.component';

const App = () => {
  const songCount = concerts.reduce((acc, concert) => {
    const songs = [...new Set([...concert.set1, ...concert.set2, ...concert.encore])];
    songs.forEach((song) => {
      if (song === 'None') {
        return;
      }
      const concertInfo = {
        date: concert.date,
        venue: concert.venue,
        song,
      };
      acc.push(concertInfo);
    });
    return acc;
  }, []);

  const sortKeyValuesBySong = (arr) => {
    const sortedEntries = Object.entries(
      arr.reduce((acc, obj) => {
        const { song } = obj;
        if (!acc[song]) {
          acc[song] = [];
        }
        acc[song].push(`${obj.date}: ${obj.venue}`);
        return acc;
      }, {})
    ).sort(([keyA, valueA], [keyB, valueB]) => {
      if (valueA.length > valueB.length) {
        return -1;
      }
      if (valueA.length < valueB.length) {
        return 1;
      }
      const firstLetterA = keyA[0].toLowerCase();
      const firstLetterB = keyB[0].toLowerCase();
      if (firstLetterA < firstLetterB) {
        return -1;
      }
      if (firstLetterA > firstLetterB) {
        return 1;
      }
      return 0;
    });

    return sortedEntries.map(([key, value]) => ({
      song: key,
      concerts: value,
    }));
  };

  const sortedSongCount = sortKeyValuesBySong(songCount);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ConcertForm />
            </div>
          }
        />
        <Route path="/song-tracker" element={<SongTracker songCount={sortedSongCount} />} />
        <Route path="/due-up" element={<SongProjections concerts={concerts} songs={sortedSongCount} />} />
      </Routes>
    </Router>
  );
};

export default App;
