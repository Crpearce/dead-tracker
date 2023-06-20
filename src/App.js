import Navigation from './components/navigation/navigation.component'
import ConcertForm from './components/concertForm/concertForm.component';

import './App.css'

const App = () =>  {
  return (
    <div className="App">
      <Navigation />
      <ConcertForm />
    </div>
  );
}

export default App;
