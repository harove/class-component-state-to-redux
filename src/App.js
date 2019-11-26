import React, {Component} from 'react';
import {store} from './store'
import './App.css';
import HalloWelt from './components/hallo-welt/HalloWelt';




class App extends Component{
    render() {
      return <HalloWelt tech= {store.getState().tech} />
    }
    
}

export default App;
