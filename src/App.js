
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
   
      </div>
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/contact' >
        <Contact />
      </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;