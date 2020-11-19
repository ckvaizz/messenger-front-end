
import { Link,useHistory } from 'react-router-dom'
import React from 'react'
import './css/signup.css';
import { useState } from 'react';
import axios from '../axios'
const Signup = ({setUser}) => {
    const [sign,setSign]= useState({})
    const history= useHistory();

    //functions to get form value
    const nameHandler=(e=>setSign({...sign,name:e.target.value}))
    const emailHandler=(e=>setSign({...sign,email:e.target.value}))
    const passwordHandler=(e=>setSign({...sign,password:e.target.value}))
    const submitfrom=(e)=>{
       
            
        axios.post("/submit",sign).then((response)=>{
            if(response.data!==""){
                setUser([response.data])
                history.push('/user')
                
                
            }else{
                alert("error: Try again")
            }
            
            
            
        })
     }
    
    

    return (
        <div className="signup-body">
            <h1>Create New</h1>
            <from className="signup-form">
                <input onChange={nameHandler} type="text"placeholder="Name" className="signup-input"/>
                <input onChange={emailHandler} type="text" placeholder="Email" className="signup-input"/>
                <input  onChange={passwordHandler}type="password" placeholder="Password" className="signup-input"/>
                <button onClick={submitfrom} type="submit" className="signup-btn" >Signup</button>
            </from>
            <div className="signup-link">
                <Link to='/'>Old</Link>
            </div>
            
        </div>
    )
}

export default Signup
