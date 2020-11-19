import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Axios from '../axios';
import './css/findUser.css'
import User from './user';
 
const FindUser = ({small,setMessageUser}) => {
    
    const [users,setusers]=useState([])
    const getusers=async()=>{
        await Axios.get('/getusers').then((response)=>{
            console.log("response",response.data)
            setusers(response.data)
        })
    }
   
    
   
    useEffect(()=>{
      getusers();
      console.log("calling...")
         
    },[])
    
    
console.log("users",users);
    
    return (
        <div className="findUser">
            <div className="finder-top">
                <Link to='/user'>
                <ArrowBackIcon color="secondary" style={{'marginTop':"29px",'marginLeft':"10px"}}/>
                </Link>
                <h2>USERS</h2>
            </div>
            
            {users.map((user)=>{
               
                    return <User 
                    users={users}
                    setMessageUser={setMessageUser} 
                     data={user} 
                     name={user.name}
                     small={small}/>
                
                   
            })}
        </div>
    )
}
export default FindUser;