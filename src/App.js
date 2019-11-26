import React, {Component} from 'react';
import {createStore} from 'redux';
import reducer from './reducers/index'
import './App.css';
import HalloWelt from './components/hallo-welt/HalloWelt';


const initialState = {tech: 'React'}
const store = createStore(reducer,initialState);

class App extends Component{
    render() {
      return <HalloWelt tech= {store.getState().tech} />
    }
    
}

export default App;
