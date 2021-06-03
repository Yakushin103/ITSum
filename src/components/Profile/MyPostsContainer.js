import React from 'react';

import MyPosts from './MyPosts';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer'

const MyPostsContainer = ({ postData, dispatch, newText }) => {


    const onAddPost = () => {
        dispatch(addPostActionCreator())
    }

    const onAddText = (text) => {
        dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts
            addPost={onAddPost}
            updateNewPostText={onAddText}
            newText={newText}
            postData={postData}
        />
    );
}

export default MyPostsContainer;