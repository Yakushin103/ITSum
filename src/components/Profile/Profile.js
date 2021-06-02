import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts';
import MyAvatar from './MyAvatar';

const Profile = ({ state, dispatch }) => {
    return (
        <div className="content">
            <MyAvatar

            />
            <MyPosts
                newText={state.newText}
                postData={state.postData}
                dispatch={dispatch}
            />
        </div>
    );
}

export default Profile;