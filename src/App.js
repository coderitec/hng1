
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Home />
      </div>
      <Route path='/' component={Home}/>
      <Route path='/contact' component={Contact}/>
    </BrowserRouter>
  );
}

export default App;