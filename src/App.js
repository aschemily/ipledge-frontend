import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChallengeContainer from './container/challengeContainer'
import NavBar from './container/NavBar'

class App extends Component {
  

render(){
  //console.log('this.state', this.state.challenges)
  return (
    <div className="App">
      <NavBar/>
      <h1>APP PAGE</h1>
      <ChallengeContainer/>

    </div>
  );

}

}

export default App;
