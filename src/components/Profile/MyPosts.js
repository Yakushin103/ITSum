import React from 'react';

import Post from './Post';


const MyPosts = ({ postData, newText, addPost, updateNewPostText }) => {

  let newPostElement = React.createRef();

  const onAddPost = () => {
    addPost()
  }

  const onAddText = () => {
    let text = newPostElement.current.value
    updateNewPostText(text)
  }

  return (
    <div className="content-post">
      <h1>My post</h1>
      <textarea
        ref={newPostElement}
        value={newText}
        onChange={onAddText}
      />
      <button disabled={false} onClick={onAddPost} > Add post </button>
      {
        postData &&
        postData.map((item, i) => (
          <Post
            key={i}
            message={item.message}
            id={i}
          />
        ))
      }
    </div>
  );
}

export default MyPosts;