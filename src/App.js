import React, {Component} from 'react';
import {store} from './store'
import './App.css';
import HalloWelt from './components/hallo-welt/HalloWelt';
import ButtonGroup from './components/button-group/ButtonGroup';
import {render} from './index';

class App extends Component{
  
    constructor(){
      super();
      store.subscribe(render);
    }

    render() {
      return[
        <HalloWelt key = {1} tech= {store.getState().tech}/>,
        <ButtonGroup key = {2} techs = {store.getState().techs} />
      ]; 
    }
    
}

export default App;
