import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom';
import { UserContext } from '../UserContext';
function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);

  const {setUserInfo} = useContext(UserContext);

 async function login(e){
    e.preventDefault();
 const response=  await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username,
        password
      }),
      credentials:'include',
    })
    if(response.ok){
        // alert('login success');
      response.json().then(userinfo=>{
        setUserInfo(userinfo);
        setRedirect(true);
      })
    } else {
        alert('login failed');
    }

    setPassword('');
    setUsername('');
  }

  if(redirect){
    return <Navigate to='/'/>
  }
  return (
    <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder="username" value={username} 
        onChange={(e)=>setUsername(e.target.value)}/>

        <input type="password" placeholder="password"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginPage