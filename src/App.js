import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChallengeContainer from './container/challengeContainer'

class App extends Component {
  state={
    challenges:[]
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/challenges")
    .then(r => r.json())
    .then(data=>{
      this.setState({
        challenges: data
      })
    })
  }

render(){
  console.log('this.state', this.state.challenges)
  return (
    <div className="App">
      <h1>APP PAGE</h1>
      <ChallengeContainer challenges={this.state.challenges}/>
    </div>
  );

}

}

export default App;
