import React from 'react';
import './App.css';
import Home from './Components/Home'
import Form from './Components/Form'
import { Route, Switch } from 'react-router-dom'
import red from './Components/red';
import green from './Components/green';
import blue from './Components/blue';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Add" component={Form} />
          <Route exact path="/red" component={red} />
          <Route exact path="/green" component={green} />
          <Route exact path="/blue" component={blue} />
        </Switch>
    </div>
  );
}

export default App;