import {useState , useEffect} from 'react'
import Userlist from './components/user_list'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Chat from './components/chat'
import Login from './components/login'
import Signup from './components/Signup'
import Axios from './axios'
import history from './history'
import Finduser from './components/findUser';
import Pusher from 'pusher-js';




function App() {
  

  const [small,setsmall] = useState(false);
  const [userErr,setuserErr] =useState(false);
  const [messages,setMessages] = useState();   
  const [userDetails,setUser]=useState([])
  const [messageUser,setMessageUser]=useState([])
  
  
  
  
  //functions
  
  const getLocalData=async()=>{
    if(userDetails.length===0){
      history.push('/')
      
    }else{
      history.push('/user')
    
    }
  }
  
  
  
  window.onload=getLocalData();
  

  
  function handler(){
    if (window.innerWidth <=960){
      setsmall(true)
    }else{
      setsmall(false)
    }
  }

  //useEffects
  
  useEffect(()=>{
   
    handler();
    
  },[])
  useEffect(async() => {
   await Axios.get('/messages').then((response)=>{
     
      const data = response.data
       setMessages(data);  
    })
  
  }, [])
 useEffect(() => {
  const pusher = new Pusher('18566967eb42d6cbc87c', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', function(data) {
  
    setMessages([...messages,data])
  });

  return ()=>{
    channel.unbind_all();
    channel.unsubscribe();

  }
 }, [messages])
  
  
  return (
    
    <div className="app">
      <div className={small?"body--mobile":"body"}>
        <Router>
          <Switch>
            <Route exact path='/'>
            <Login userErr={userErr}
             setuserErr={setuserErr} 
             setUserDetails={setUser}
              small={small}/>
            </Route>
            <Route path="/signup">
               <Signup setUser={setUser}/> 
            </Route>
            <Route path='/user'>
            <Userlist  messages={messages}
             setMessageUser={setMessageUser} 
             userDetails={userDetails}
              small={small}/>
            </Route>
            <Route path='/chat'>
              
              <Chat 
               messages={messages} 
               userDetails={userDetails}
               setMessages={setMessages}
                
                 small={small}
                 messageUser={messageUser}
                 />
              
            </Route>
            <Route path='/findUsers'>
                  <Finduser setMessageUser={setMessageUser} small={small}/>
            </Route>
          </Switch>
        </Router>
      
      
      </div>
      
      
      
    </div>
  );
}

export default App;
