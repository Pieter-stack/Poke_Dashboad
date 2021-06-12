import Compare from './components/Compare';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="primarycon">
      <Navbar/>
      <div className='bodycontainer'>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/compare" component={Compare} />
      </Switch>
      </div>

    </div>
    </Router>
  );
}

export default App;
