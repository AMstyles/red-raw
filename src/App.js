import './App.scss';
import Counter from './routes/count';
import Notes from './routes/notes';

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
      <NavBar />
      <Notes />

    </div>
  );
}

export default App;
