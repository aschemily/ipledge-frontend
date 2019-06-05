import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const NewChallengeForm = (props) =>{
  return(
    <div>
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

    </div>
  )
}

export default NewChallengeForm
