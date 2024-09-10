import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';

function Header() {
  
  const {setUserInfo, userinfo} = React.useContext(UserContext);
  React.useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(res => {
      res.json().then(userinfo=> {
          setUserInfo(userinfo);
      })
    })
      
  },[]);

    function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
    }

    const username= userinfo?.username;

  return (
    <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          {username && 
          <>
          <Link to="/create">Create new Post</Link>
          <a onClick={logout} className='log'>Logout</a>
          </>
          
          }
          
          {!username && 
          <>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>
          </>
          }
         
        </nav>
      </header>
  )
}

export default Header