import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Post from './Post';


const MyPosts = ({ postData, addPost }) => {

  const onAddPost = (values) => {
    addPost(values.newPostText)
  }

  return (
    <div className="content-post">
      <h1>My post</h1>

      <AddPostFormRedux onSubmit={onAddPost} />

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

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostText"
        component="textarea"
      >

      </Field>

      <button>
        Add post
      </button>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm)


export default MyPosts;