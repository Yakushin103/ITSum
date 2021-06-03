import React from 'react';
import './Profile.css';
import MyPostsContainer from './MyPostsContainer';
import MyAvatar from './MyAvatar';

const Profile = ({ state, dispatch }) => {
    return (
        <div className="content">
            <MyAvatar

            />
            <MyPostsContainer
                newText={state.newText}
                postData={state.postData}
                dispatch={dispatch}
            />
        </div>
    );
}

export default Profile;