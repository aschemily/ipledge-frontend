import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class NewChallengeForm extends Component {
  state = {
    title:'',
    image:'',
    information:'',
    location:''
  }

  inputChange = (event)=>{
  //  const {title, image, information, location} = event.target
  //console.log('event.target.value',event.target.value)
  }

render(){
  return(

      <Form>
         <Form.Field>
           <label>Image</label>
             <input type="text" placeholder='Image'
               onChange={this.inputChange} />
           </Form.Field>

           <Form.Field>
             <label>Title</label>
             <input placeholder='Title'
               onChange={this.inputChange}/>
           </Form.Field>

           <Form.Field>
             <label>Location</label>
             <input placeholder='Location'
               onChange={this.inputChange}/>
           </Form.Field>

         <Form.Field>
           <label>Information</label>
           <input placeholder='Information'
             onChange={this.inputChange} />
         </Form.Field>

         <Button type='submit'>Submit</Button>
     </Form>
  )

}

}

export default NewChallengeForm
