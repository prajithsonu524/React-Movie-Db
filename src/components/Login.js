import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import API from '../API'
import { Context } from '../context'
import { Wrapper } from './LoginStyles'

const Login = () => {
       
       const [username,setUsername]=useState('');
       const [password,setPassword]=useState('');
       const [error,setError]=useState(false);

       const [user,setUser]=useContext(Context);
       const navigate=useNavigate();






       const handleInput = e=>{
           const name = e.currentTarget.name;
           const value = e.currentTarget.value;
            
           if(name==='username') setUsername(value);
           if(name==='password') setPassword(value);
 


       };
       const handleSubmit= async()=>{
         setError(false);
         try{
         const requestToken=await API.getRequestToken();
         const sessionId=await API.authenticate(requestToken,username,password);
         console.log(sessionId)
         setUser({
           sessionId:sessionId.session_id,username
         })
         navigate('/');
         }
         catch(error){
           setError(true);
         }

       }; 

    return (
      <Wrapper>
          <label>Username:</label>
          <input type='text' name='username' value={username} onChange={handleInput}/>
          <input type='password' name='password' value={password} onChange={handleInput}/>

          <Button text='Login' callback={handleSubmit} />
      </Wrapper>
    )
}

export default Login
