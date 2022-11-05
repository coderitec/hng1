
import {BrowserRouter} from 'react-router-dom';
import Profile from './components/Profile';
import './App.css';
import Link from './components/Link';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Profile />
      <Link />
      </div>
    </BrowserRouter>
  );
}

export default App;