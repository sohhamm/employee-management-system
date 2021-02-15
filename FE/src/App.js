import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Tasks from './components/Tasks/Tasks';
import Timings from './components/Timings/Timings';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/updateTasks" component={Tasks} />
        <Route path="/timings" component={Timings} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
