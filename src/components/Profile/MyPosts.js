import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';

import Post from './Post';
import { Textarea } from '../common/FormsControl/FormsControl';

import { required, maxLengthCreator } from '../../utils/validators';

const maxLength = maxLengthCreator(10)

const MyPosts = memo(({ postData, addPost }) => {
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
})

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostText"
        component={Textarea}
        validate={[required, maxLength]}
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