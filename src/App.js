import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { HomePage } from './components/home/HomePage';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      history: createBrowserHistory(),
    };
  }

  render(){
    const { history } = this.state;
    return (
        <Router history={history}>
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/home" component={HomePage}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
