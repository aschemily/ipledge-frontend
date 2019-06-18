import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class NewChallengeForm extends Component {
  state = {
    title:'',
    image:'',
    information:'',
    location:''
  }

  inputChange = (event) =>{
    const {title, image, information, location} = event.target
  //  console.log('event.target.value',event.target.value)
    this.setState({
      title: event.target.value,
      image: event.target.value,
      information: event.target.value,
      location: event.target.value
    })
  }

handleSubmit = () =>{
  this.props.newChallenge(this.state.title, this.state.image, this.state.information, this.state.location)
}

render(){
  console.log('what are props', this.props)
  return(

      <Form onSubmit={this.handleSubmit}>
         <Form.Field>
           <label>Image</label>
             <input type="text" placeholder='Image'
               onChange={this.inputChange}
               value = {this.state.image}/>
           </Form.Field>

           <Form.Field>
             <label>Title</label>
             <input placeholder='Title'
               onChange={this.inputChange}
               value={this.state.title}/>
           </Form.Field>

           <Form.Field>
             <label>Location</label>
             <input placeholder='Location'
               onChange={this.inputChange}
               value={this.state.location}/>
           </Form.Field>

         <Form.Field>
           <label>Information</label>
           <input placeholder='Information'
             onChange={this.inputChange}
             value={this.state.information} />
         </Form.Field>

         <Button type='submit'>Submit</Button>
     </Form>
  )

}

}

export default NewChallengeForm
