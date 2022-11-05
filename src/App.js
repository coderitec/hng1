
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './components/Profile';
import './App.css';
import Link from './components/Link';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Home />
      </div>

      <Route path='/contact' component={Contact}/>
    </BrowserRouter>
  );
}

export default App;