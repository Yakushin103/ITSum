// import React from 'react';
import { connect } from 'react-redux';

import MyPosts from './MyPosts';

import { addPost } from '../../redux/profile-reducer'

const mapStateToProps = (state) => {
  return {
    newText: state.profilePage.newText,
    postData: state.profilePage.postData
  }
}

const MyPostsContainer = connect(mapStateToProps, {
  addPost
})(MyPosts);

export default MyPostsContainer;