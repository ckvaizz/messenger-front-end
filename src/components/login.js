import React from 'react'
import './css/login.css';
import {Link, useHistory} from 'react-router-dom'
import { useState } from 'react';
import Axios from '../axios'


const Login = ({small,setUserDetails,setuserErr,userErr}) => {
    const history=useHistory();
    const [show,setShow]=useState(true)
    const [logindata,setlogindata]=useState({})
    const emailHandler=(e=>setlogindata({...logindata,email:e.target.value}));
    const passWordHandler=(e=>setlogindata({...logindata,password:e.target.value}));
    
    
    const from_submit=(e)=>{
       
        e.preventDefault();
        Axios.post('/login',logindata).then(Response=>{
            if(Response.data.status){
           
               setUserDetails([Response.data.userdata])
               history.push('/user')
            }else{
                setuserErr(true);
               history.push('/')
            }
        })

       
    }
    return (
        <div className="login-body">
           <h1>Login{userErr?` Error`:``}</h1>
            <form className="login-form">
                <input onChange={emailHandler} className={small?"login-input--mobile":"login-input" }type="text" name="email" placeholder="Email.."/>
                <input onChange={passWordHandler} className={small?"login-input--mobile":"login-input" }type="password" name="password" placeholder="Password.."/>
                <button onClick={from_submit} className="login-btn" type="Submit">Login</button>
            </form>
                <div className="login-link">
                    <Link to='/signup'>
                      New
                    </Link>
                </div>
                <div style={{marginTop:"10px"}}>
                    <button className="infoBtn"  onClick={()=>setShow(!show)}>INFO</button>
                    <div style={{color:"skyblue",border:"2px solid red",borderRadius:"10px"}} hidden={show}>
                          * This is a simple messenger.<br/><br/>
                          * Text messages only(more features coming soon)<br/><br/>
                          * Steps To Use<br/>
                            -Login (If you are new Signup)<br/>
                            -Tap on Find friends<br/>
                            -Tap your friend<br/><br/>
                          * Text your option <br/> 
                            -Find friends and tap on "Ckvaizz";
                            -OR <a href="https://api.whatsapp.com/send?phone=9072956553">On Whatsapp</a><br/>
                            - <a href="https://instagram.com/ckvaizz?igshid=1izqja7i58b5a">On Instagram</a>

                             

                    </div>
                </div>
            
        </div>
    )
}

export default Login
