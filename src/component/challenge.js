import React, {Component} from 'react'

const Challenge=(props)=>{
console.log('challenge props', props)
  return(
    <div>
    <h1>THE CHALLENGE </h1>
    <h5>{props.challenge.image}</h5>
    <h2>{props.challenge.title}</h2>
    <h3>{props.challenge.location}</h3>
    <h4>{props.challenge.information}</h4>
    </div>
  )
}

export default Challenge
