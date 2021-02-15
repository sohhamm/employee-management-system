import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Tasks from './components/Tasks/Tasks';
import Timings from './components/Timings/Timings';
import Login from './components/Login/Login';

function App() {
  const [isLogin, setisLogin] = useState();
  return (
    <Router>
      {isLogin ? (
        <Switch>
          <Route path="/updateTasks" component={Tasks} />
          <Route path="/timings" component={Timings} />
          <Route path="/" component={Home} />
        </Switch>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
