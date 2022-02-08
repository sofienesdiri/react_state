import './App.css';
import React from 'react';
import Profile from './component/Profile.js'

class App extends React.Component {
  constructor(){
    super()
    this.state={
        bool : false
    }
  }
  reverse=()=>this.setState({bool:!this.state.bool})
  
  
  render(){
  return (
    <div>
      <button onClick={this.reverse}>click me</button>
      {(this.state.bool) && <Profile/>}
    </div>
  );
  }
}

export default App;
