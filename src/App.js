import React from 'react';
import './index.css';
import HomePage from './Views/HomePage';
import CollectPage from './Views/CollectPage';
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
              <Route exact path="/data-collecting" component={CollectPage}/>
            </Switch>
          </div>
        </Router>
    )
  }
}
export default App;
