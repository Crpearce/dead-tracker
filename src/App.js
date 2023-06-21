import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation/navigation.component'
import ConcertForm from './components/concertForm/concertForm.component'

const App = () =>  {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<ConcertForm />} />
      </Routes>
    </Router>
  );
}

export default App;
