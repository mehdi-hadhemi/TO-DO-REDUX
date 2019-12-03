import React,{Component}  from 'react';
import './App.css';
import Todo from './todo'

import { connect } from 'react-redux'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Todo/>
    </div>
  );
  }
}


export default App;
