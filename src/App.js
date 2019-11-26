import React, {Component} from 'react';


import './App.css';
import HalloWelt from './components/hallo-welt/HalloWelt';

class App extends Component{
    state = {
      tech: 'React',
    }

    render() {
      return <HalloWelt tech= {this.state.tech} />
    }
    
}

export default App;
