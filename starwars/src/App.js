import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import injectContext from './store/appContext';
import Home from './view/Home'
import CaractPeople from './components/charPeople'
import CaractPlanets from './components/charPlanets'
import CaractVeh from './components/charVeh'


function App() {
  return (
<Container>
    <div className="App">
    
    

    <BrowserRouter>
   <Switch>
    <div className="App">
     <Route exact path="/" component={Home}></Route>
     <Route exact path= "/charpeople/:id" component={CaractPeople}></Route>
     <Route exact path= "/charplanets/:id" component={CaractPlanets}></Route>
       <Route exact path= "/charveh/:id" component={CaractVeh}></Route>
     
    
      </div>
     </Switch>
</BrowserRouter>
    
    </div>
    </Container>
  );
}

export default injectContext(App);
