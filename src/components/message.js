import React from 'react'
import './css/message.css'

 const message = ({small,message,snd,time}) => {
    return (
        <div id="message" className={snd?"message-snd":"message"}>
            <h3>{message}</h3>
            <p>{time}</p>
            
        </div>
    )
}

export default message;