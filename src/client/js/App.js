import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import { 
  BrowserRouter, 
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


import Ventas from './Ventas';
import Options from './Options';






class App extends Component {
  render (){
    return <div>
      <Switch>
        <Route exact path='/' component={Options}/>
        <Route exact path='/ventas' component={Ventas}/>
        
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
