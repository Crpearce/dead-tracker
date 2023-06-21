import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation/navigation.component'
import ConcertForm from './components/concertForm/concertForm.component'
import SongTracker from './components/songTracker/songTracker.component';

const App = () =>  {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<ConcertForm />} />
        <Route path='/song-tracker' element={<SongTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
