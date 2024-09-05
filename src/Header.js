import { set } from 'mongoose';
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [username, setUsername] = React.useState(null)
  React.useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include'
    }).then(res => {
      res.json().then(userinfo=> {
          setUsername(userinfo.username);
      })
    })
      
  },[]);

    function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUsername(null);
    }

  return (
    <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          {username && 
          <>
          <Link to="/create">Create new Post</Link>
          <a onClick={logout}>Logout</a>
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