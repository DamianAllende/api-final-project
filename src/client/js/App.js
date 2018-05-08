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
import Inicio from './Inicio';



class App extends Component {
  render (){
    return <div>
      <Switch>
        <Route path='/' component={Ventas}/>
        
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
