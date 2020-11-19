import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/user.css'
import {useHistory} from 'react-router-dom';


 const User = ({small,data,name,setMessageUser,users}) => {
    const history=useHistory();
    const selectedUser=()=>{
        users.map(usr=>{
            
                if(usr._id===data._id){
                     return setMessageUser([usr]) ,history.push('/chat')
                     }else return 
        
        })
    }
    return (
        <div onClick={selectedUser} className={small?"box--mobile":"box"} >
            <Avatar style={{ height:"50px" , width:"50px"}}/>
             <h2>{name}</h2>
           
            
        </div>
    )
}

export default User