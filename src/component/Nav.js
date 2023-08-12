import React from 'react'
import './Nav.css'
import Top from './Top'
import { Link } from "react-router-dom"
function Nav() {
  return (
  
    <div className='Nav'>
   
 
          <Link  className='Top_Nav' to="/Chat"> Chats  (6) </Link>
          <Link className='Top_Nav' to ="/Status"> Status . </Link>
          <Link className='Top_Nav' to ="/Call"> Calls </Link>
    </div>
  )
}

export default Nav
