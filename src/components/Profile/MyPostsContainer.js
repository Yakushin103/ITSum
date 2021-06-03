import React from 'react';
import { connect } from 'react-redux';

import MyPosts from './MyPosts';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer'

const mapStateToProps = (state) => {
    return {
        newText: state.postPage.newText,
        postData: state.postPage.postData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;