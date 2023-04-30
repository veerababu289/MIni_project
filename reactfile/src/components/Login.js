import {React, useState, useContext} from 'react'
import { store } from '../Dashboard/Main'
import axios from 'axios'

const Login = () => {
    let [token,setToken] = useContext(store)

    let [data,setData] = useState(
      {
        email: '',
        password: ''
      }
    )
    const handler = (e) => {
        setData({...data,[e.target.name]: e.target.value})
      }
      
    const submitHandler = (e) => {
      e.preventDefault()
      if ( data.email && data.password) {
        axios.post('http://localhost:8000/login', data)
          .then((res) => {
           if(!res.data.token) {alert(res.data)};
           console.log("token....",res.data.token)
            setToken(res.data.token)
            setData({
              email: '',
              password: ''
            });
          });
      } else {
        alert("Fill Input Feilds")
      }
    }

    if(token){
     return window.location.href ='/home'
  }
    

  return (
    <div style={{marginTop : '100px'}}>
      <center>
        <form onSubmit={submitHandler} autoComplete='off' >
        <input type = "email" placeholder='email' name = "email" value = {data.email} onChange={handler}/> <br/>
        <input type = "password" placeholder='password' name = "password" value = {data.password} onChange={handler}/> <br/>
        <input type = "submit" value= "Login" />
        </form>
     </center> 
    </div>
  )
}

export default Login
