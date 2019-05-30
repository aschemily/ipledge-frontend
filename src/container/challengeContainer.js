import React, {Component} from 'react'
import Challenge from '../component/challenge'
import uuid from 'uuid'

class challengeContainer extends Component{


  render(){
    console.log('challengeContainer props', this.props)
    return(
      <div>
      <h1> Challenges Container </h1>
      {this.props.challenges.map(challenge=>{
      return <Challenge key={uuid()} challenge={challenge}/>
      })}

      </div>
    )
  }
}

export default challengeContainer
