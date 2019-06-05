import React, {Component} from 'react'
import Challenge from '../component/challenge'
import uuid from 'uuid'
import NewChallengeForm from '../component/NewChallengeForm'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


class challengeContainer extends Component{
  state={
    challenges:[],
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
  //  console.log('challengeContainer props', this.props)
    return(
      <div>
      <h1> Challenges Container </h1>
      <Modal trigger={<Button>New Challenge</Button>}>
        <Modal.Header><NewChallengeForm/></Modal.Header>
      </Modal>

      {this.state.challenges.map(challenge=>{
      return <Challenge key={uuid()} challenge={challenge}/>
      })}

      </div>
    )
  }
}

export default challengeContainer
