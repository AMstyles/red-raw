import './App.scss';
import Counter from './routes/count';
import Notes from './routes/notes';
import Spotify from './spotify/mainPage';

function NavBar() {

  return (
    <nav className="navbar">
      <ul className='list'>
        <li>< a href="#" >Counter</a></li>
        <li>< a href="#" >Notes</a></li>
      </ul>
    </nav>
  );
}

function App() {

  return (
    <div className="App">

      <Spotify />

    </div>
  );
}

export default App;
