import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const NavBar = (props) =>{
  return(
    <div>
    <Menu pointing secondary>
       <Menu.Item name='home' />
       <Menu.Item
         name='challenges'
       />
       <Menu.Menu position='right'>
         <Menu.Item
           name='logout'
         />
       </Menu.Menu>
     </Menu>
    </div>
  )
}

export default NavBar
