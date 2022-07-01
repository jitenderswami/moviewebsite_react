import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar';
import Movielist from './Components/Movielist';

function App() {
  return (
    <div className="movieApp">
      <Searchbar />
      <Movielist />
    </div>
  );
}

export default App;
