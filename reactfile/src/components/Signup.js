import {React, useState} from 'react'
import axios from 'axios'
const Signup = () => {
    let [data,setData] = useState(
      {
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
      }
    )

    const handler = (e) => {
        setData({...data,[e.target.name]: e.target.value})

      }

    const submitHandler = (e) => {
      e.preventDefault()
      if (data.username && data.email && data.password && data.confirmpassword) {
        axios.post('http://localhost:8000/signup', data)
          .then((res) => {
            alert(res.data);
            setData({
              username: '',
              email: '',
              password: '',
              confirmpassword: ''
            });
          });
      } else {
        alert("Fill Input Feilds")
      }
    }
    

  return (
    <div style={{marginTop : '100px'}}>
      <center>
        <form onSubmit={submitHandler} autoComplete='off' >
        <input type = "text" placeholder='username' name = "username" value = {data.username} onChange={handler}/> <br/>
        <input type = "email" placeholder='email' name = "email" value = {data.email} onChange={handler}/> <br/>
        <input type = "password" placeholder='password' name = "password" value = {data.password} onChange={handler}/> <br/>
        <input type = "password" placeholder='confirmpassword' name = "confirmpassword" value = {data.confirmpassword} onChange={handler}/> <br/>
        <input type = "submit" value= "Register" />
        </form>
     </center> 
    </div>
  )
}

export default Signup
