import React from 'react'

const NewChallengeForm = (props) =>{
  return(
    <div>
      <form>
      <input type="text">Image: </input>
      <input type="text">Title: </input>
      <input type="text">Location: </input>
      <textarea type="text"> Information:</textarea>

      </form>
    </div>
  )
}

export default NewChallengeForm
