import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div style={{margin : '50px'}}>
        <ul>
           <Link to = '/signup'><li>Register</li></Link> 
            <Link to = '/login'><li>Login</li></Link>
        </ul>
    </div>
  )
}

export default Nav
