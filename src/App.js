
import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './Components/Home'
import Form from './Components/Form'
import DisplayColor from './Components/displayColor';

import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/:colorName/:colorCode" component={DisplayColor} />
          <Route exact path="/Add" component={Form} />
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;