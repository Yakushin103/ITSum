import React from 'react';

import Post from './Post';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer'

const MyPosts = ({ postData, dispatch, newText }) => {

    let newPostElement = React.createRef();

    const onAddPost = () => {
        dispatch(addPostActionCreator())
    }

    const onAddText = () => {
        let text = newPostElement.current.value
        dispatch(updateNewPostTextActionCreator(text))
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