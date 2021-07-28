import React from 'react';
import { connect } from 'react-redux';

import MyPosts from './MyPosts';

import { addPost, updateNewPostText } from '../../redux/profile-reducer'

const mapStateToProps = (state) => {
  return {
    newText: state.postPage.newText,
    postData: state.postPage.postData
  }
}

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText
})(MyPosts);

export default MyPostsContainer;