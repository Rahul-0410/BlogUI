import React, { useEffect } from 'react'
import Post from '../Post'

function IndexPage() {
  const [posts, setPosts] = React.useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/post').then(response =>{
      response.json().then((posts=>{
        setPosts(posts);
        // console.log(posts);
        
      }));
    })
  },[])
  return (
    <>
    {posts.length>0 && posts.map((post,index)=>(
      <Post {...post} key={index}/>
    ))}
    </>
  )
}

export default IndexPage