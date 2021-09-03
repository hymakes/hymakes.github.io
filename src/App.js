import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About.jsx';
import Home from './Home';


class App extends React.Component {
  render() {
      return (
        <div className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        </div>
            );
  }
}

export default App;
