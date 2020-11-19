import React,{useState,useEffect} from 'react'
import './css/user_chat.css'
import {Avatar} from '@material-ui/core'
import User from './user';
import { Link } from 'react-router-dom';

import Axios from '../axios'
const User_list =({small,userDetails,messages,setMessageUser}) => {
    const [users,setusers]=useState([])
  
    useEffect(() => {
       
        const getusers= async()=>{
            await Axios.get('/getusers').then((response)=>{
               setusers(response.data)
            })
        }
        
        getusers();
      
    }, [])
    
 

    return (
        <div className="main">
            <div className={small?"top--mobile":"top"}>
                <Avatar style={{height:'50px', width:'50px'}}/>
                <h2>{userDetails[0].name}</h2>
            </div>
            <div className="search-div">
                    <Link to='/findUsers'>
                    <h3>Find User</h3>
                    </Link>
               
           </div>
            <div className={small?"user_List--mobile":"user_List"}>
               <ul>
                   {
                      users.map((user)=>{
                          for(let i=0;i<messages.length;i++){
                              if(messages[i].send===user._id || messages[i].to===user._id){
                                if(user._id !== userDetails[0]._id ){
                                   
                                  return (<User users={users} data={user} setMessageUser={setMessageUser} small={small} name={user.name} /> )
                               
                                }     
                            }
                          }
                      })
                   }
               
               </ul>
                
            </div>
            
        </div>
    )
}

export default User_list
