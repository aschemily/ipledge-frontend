import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class NewChallengeForm extends Component {
  state = {
    title:'',
    image:'',
    information:'',
    location:''
  }

  inputChange =(event)=>{
    const {title, image, information, location} = event.target
  }

render(){
  return(

      <Form>
         <Form.Field>
           <label>Image</label>
           <input placeholder='Image' />
           </Form.Field>

           <Form.Field>
             <label>Title</label>
             <input placeholder='Title' />
           </Form.Field>

           <Form.Field>
             <label>Location</label>
             <input placeholder='Location' />
           </Form.Field>

         <Form.Field>
           <label>Information</label>
           <input placeholder='Information' />
         </Form.Field>

         <Button type='submit'>Submit</Button>
     </Form>
  )

}

}

export default NewChallengeForm
