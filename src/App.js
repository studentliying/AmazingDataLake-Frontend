import React from 'react';
import './index.css';
import HomePage from './Views/HomePage/HomePage';
import {  BrowserRouter as Router , Route } from "react-router-dom";
import {Switch} from "react-router";
import './App.css';


class App extends React.Component{
  render(){
    return(
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage}/>
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;
