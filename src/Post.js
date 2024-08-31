import React from 'react'

function Post() {
  return (
    <div className="post">
    <div className="image">
    <img src="https://techcrunch.com/wp-content/uploads/2023/08/newsroom-robert-noyce-bldg-2.jpg.rendition.intel_.web_.1920.1080.jpg?resize=900,506" alt="img"/>
    </div>
    <div className="texts">
    <h2>IBM Cloud to offer Intel’s Gaudi 3 AI chips next year</h2>
    <p className="info">
      <a className="author">Rahul </a>
      <time> 2024-08-29 22:06</time>
    </p>
    <p className="summary">Intel has found its first cloud customer for its Gaudi 3 AI accelerator chip: IBM Cloud.
IBM and Intel on Thursday said IBM Cloud will begin offering Gaudi 3 to customers early next year. 
</p>
    </div>
  </div> 
  )
}

export default Post