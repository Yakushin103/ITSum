import React from 'react';

import { avaImage } from '../common/constant/Constant'

const Post = ({ message, id }) => {

  return (
    <div className="post" key={id}>
      <img alt="Avatar" src={avaImage} />
      {message}
    </div>
  );
}

export default Post;