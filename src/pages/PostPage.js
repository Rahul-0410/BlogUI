import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

function PostPage() {
  const { id } = useParams();
  const { userinfo } = React.useContext(UserContext);
  const [postInfo, setPostInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then((response) => response.json())
      .then((postInfo) => setPostInfo(postInfo));
  }, [id]);

  function handleDelete() {
    fetch(`http://localhost:4000/post/${postInfo._id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
     
      });
  }

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1 className="title">{postInfo.title}</h1>
      <time>{format(new Date(postInfo.createdAt), "MMM d, yyyy HH:mm")}</time>
      <div className="author">by @{postInfo.author.username}</div>
      {userinfo?.id === postInfo.author._id && (
        <>
          <div className="edit-row">
            <Link to={`/edit/${postInfo._id}`} className="edit-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit Post
            </Link>
          </div>
          <div className="edit-row">
            <button onClick={handleDelete} className="delete-btn">
              Delete Post
            </button>
          </div>
        </>
      )}
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="banner img" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}

export default PostPage;