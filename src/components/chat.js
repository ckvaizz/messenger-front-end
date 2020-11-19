import React, { useState,useEffect} from 'react'
import './css/chat.css'
import Message from './message';
import {Avatar, IconButton} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send'
import {Link} from 'react-router-dom'
import Axios from '../axios';
import $ from 'jquery';


const Chat = ({small,messages,messageUser,userDetails}) => {
   const [inputText,setInputText]=useState("")
const inputHandler=(e=>setInputText(e.target.value))

const submitHandler=(e)=>{
    e.preventDefault();
    const data={
        message:inputText,
        send:userDetails[0]._id,
        to:messageUser[0]._id,
        time:new Date().toLocaleString()

    };
    setInputText("")
    Axios.post('/messages',data).then((response)=>{
 })
     
}
useEffect(() => {
    var height = 0;
$('#chat_body div').each(function(i, value){
    height += parseInt($(this).height());
    
});

height += '';

$('#chat_body').animate({scrollTop: height});
}, [messages])


    return (
        <div className={small?"chat--mobile":"chat"}>
            <div className="chat_head">
                <Link to='/user'>
                <ArrowBackIcon style={{'marginTop':"29px",'marginLeft':"10px"}}/>
                </Link>
                
                <Avatar style={{height:"50px",width:"50px",'marginLeft':"20px",'marginTop':"10px"}}/>
                <h2>{messageUser[0].name}</h2>

            </div>
            <div id="chat_body" className={small?"chat_body--mobile":"chat_body"} >
                <div>
             {messages.map((msg)=>{
                   
                 if(msg.send===userDetails[0]._id && msg.to===messageUser[0]._id || msg.send===messageUser[0]._id && msg.to===userDetails[0]._id ){
                    return (<Message time={msg.time} message={msg.message} snd={msg.send===userDetails[0]._id?true:false} small={small}/>)
               }
             })}   
                </div>

            </div>
            <div className={small?"chat_bottum--mobile":"chat_bottum"}>
                <form>
                    <input value={inputText} onChange={inputHandler}/>
                    <IconButton>
                    <button onClick={submitHandler} className={small?"send-btn--mobile":"send-btn"}><SendIcon/> </button>
                       
                    </IconButton>
                    
                </form>

            </div>
            
        </div>
    )
}

export default Chat
